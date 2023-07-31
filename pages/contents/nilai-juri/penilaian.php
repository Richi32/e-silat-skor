<style>
    .fixed-bottom-buttons {
        position: fixed;
        bottom: 20px;
        width: 100%;
        padding-right: 3rem;
    }
</style>

<script>
    $(document).ready(function () {
        $('#modal-biru').modal('hide');
        $('#modal-merah').modal('hide');

        $("#pukulan-m").on("click", function () {
            var nilai_id = 1;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#pukulan-b").on("click", function () {
            var nilai_id = 1;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#tendangan-m").on("click", function () {
            var nilai_id = 2;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#tendangan-b").on("click", function () {
            var nilai_id = 2;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $(document).on("click", "#hapus-m", function () {
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            deleteData(users_id, atlit_id);
        });

        $(document).on("click", "#hapus-b", function () {
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            deleteData(users_id, atlit_id);
        });

        function tambahData(nilai_id, ronde_id, users_id, atlit_id) {
            $.ajax({
                type: "POST",
                url: "<?= base_url() ?>process/penilaian-juri/tambah.php",
                data: {
                    nilai_id : nilai_id,
                    ronde_id : ronde_id,
                    users_id : users_id,
                    atlit_id : atlit_id
                },
                success: function () {
                    location.reload();
                    // console.log("sukses")
                },
            });
        }

        function deleteData(users_id, atlit_id) {
            $.ajax({
                type: "GET",
                url: "<?= base_url() ?>process/penilaian-juri/hapus.php",
                data: { 
                    users_id : users_id,
                    atlit_id : atlit_id
                },
                success: function () {
                    location.reload();
                },
            });
        }
    })
</script>

<?php
$query_pertandingan = mysqli_query($koneksi, 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_biru.kontingen AS kontingen_biru,atlit_merah.kontingen AS kontingen_merah,atlit_merah.nama AS nama_atlit_merah,arena.arena, ronde.status_ronde FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id JOIN ronde ON ronde.partai_id=partai.id JOIN arena ON ronde.arena_id=arena.id WHERE partai_id="'.$_GET['id'].'" AND ronde.id="'.$_GET['ronde-id'].'" GROUP BY partai.id ');
while ($data_pertandingan = mysqli_fetch_array($query_pertandingan)) {
?>
<div class="content-wrapper">
    <!-- Main content -->
    <section class="content" style="background-color: #fff;">
        <div class="modal modal-primary fade" id="modal-biru">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title">Vote Sudut Biru</h4>
                        <h2 class="modal-title">Jatuhan</h2>
                        <div class="row" style="margin-top: 2rem;">
                            <div class="col-sm-6">
                                <button class="btn btn-lg btn-block bg-orange">NO</button>
                            </div>
                            <div class="col-sm-6">
                                <button class="btn btn-lg btn-block bg-olive">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal modal-danger fade" id="modal-merah">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title">Vote Sudut Merah</h4>
                        <h2 class="modal-title">Binaan</h2>
                        <div class="row" style="margin-top: 2rem;">
                            <div class="col-sm-6">
                                <button class="btn btn-lg btn-block bg-orange">NO</button>
                            </div>
                            <div class="col-sm-6">
                                <button class="btn btn-lg btn-block bg-olive">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center h4" colSpan="2">
                                            <?= $_SESSION['nama_user'] ?>
                                            <br />
                                            <?= $data_pertandingan['arena'] ?>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">
                                            <?= $data_pertandingan['kontingen_merah'] ?> <br>
                                            <strong style="font-size: 2.5rem;"><?= $data_pertandingan['nama_atlit_merah'] ?></strong>
                                        </td>
                                        <td class="text-center">
                                            <?= $data_pertandingan['kontingen_biru'] ?> <br>
                                            <strong style="font-size: 2.5rem;"><?= $data_pertandingan['nama_atlit_biru'] ?></strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-body table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="text-center bg-red">Skor</th>
                                        <th class="text-center bg-black" width="30">Babak</th>
                                        <th class="text-center bg-blue">Skor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $query_ronde = mysqli_query($koneksi, 'SELECT ronde.id AS ronde_id,ronde.ronde,ronde.status_ronde FROM partai JOIN ronde ON ronde.partai_id=partai.id WHERE partai_id='.$_GET['id']);
                                    while ($data_ronde = mysqli_fetch_array($query_ronde)) {
                                    ?>
                                    <tr>
                                        <td class="text-danger">
                                            <?php
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($data_nilai_merah = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $data_nilai_merah['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <td class="text-center <?= $data_ronde['ronde'] == $_GET['ronde-id'] ? 'bg-black' : 'bg-warning' ?>">
                                            <a href="<?= base_url() ?>/nilai-juri/penilaian?id=<?= $_GET['id'] ?>&ronde-id=<?= $data_ronde['ronde'] ?>" style="text-decoration: none; display: block;">
                                                <strong><?= $data_ronde['ronde'] ?></strong>
                                            </a>
                                        </td>
                                        <td class="text-right text-primary">
                                            <?php
                                            $query_nilai_biru = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($data_nilai_biru = mysqli_fetch_array($query_nilai_biru)) {
                                            ?>
                                            <?= $data_nilai_biru['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php 
            if($data_pertandingan['status_ronde'] == 'aktif'){
        ?>
        <div class="fixed-bottom-buttons">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                            <button class="button btn btn-flat btn-danger btn-lg" id="pukulan-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>">Pukulan(1)</button>
                            <button class="button btn btn-flat btn-danger btn-lg" id="tendangan-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>"
                                style="margin-top: 1.5rem;">Tendangan(2)</button>
                        </div>
                        <button class="button btn btn-flat btn-warning btn-lg" id="hapus-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>"
                            style="margin-top: 6.2rem;">Hapus</button>
                    </div>
                    <div class="col-sm-6 text-right">
                        <button class="button btn btn-flat btn-warning btn-lg d-block d-sm-none" id="hapus-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>"
                            style="margin-top: 6.2rem;">Hapus</button>
                        <div class="btn-group-vertical" style="margin-left: 1.5rem;">
                            <button class="button btn btn-flat btn-primary btn-lg" id="pukulan-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>">Pukulan(1)</button>
                            <button class="button btn btn-flat btn-primary btn-lg" id="tendangan-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>"
                                style="margin-top: 1.5rem;">Tendangan(2)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php } ?>
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->
<?php } ?>