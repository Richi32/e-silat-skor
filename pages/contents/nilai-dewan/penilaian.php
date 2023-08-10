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
        $("#jatuhan-m").on("click", function () {
            var nilai_id = 3;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#jatuhan-b").on("click", function () {
            var nilai_id = 3;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#binaan-m").on("click", function () {
            var nilai_id = 6;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#binaan-b").on("click", function () {
            var nilai_id = 6;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#teguran-m").on("click", function () {
            var nilai_id = 5;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#teguran-b").on("click", function () {
            var nilai_id = 5;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#peringatan-m").on("click", function () {
            var nilai_id = 4;
            var ronde_id = <?= $_GET['ronde-id'] ?>;
            var users_id = <?= $_SESSION['id'] ?>;
            var atlit_id = $(this).attr("atlitId");
            tambahData(nilai_id, ronde_id, users_id, atlit_id);
        });

        $("#peringatan-b").on("click", function () {
            var nilai_id = 4;
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
function hitungNilaiHukuman($nilai_b) {
    // Menghitung nilai c berdasarkan nilai b
    $nilai_hukuman = floor($nilai_b / 3);
    return $nilai_hukuman;
}
$query_pertandingan = mysqli_query($koneksi, 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_biru.kontingen AS kontingen_biru,atlit_merah.kontingen AS kontingen_merah,atlit_merah.nama AS nama_atlit_merah,arena.arena, ronde.status_ronde FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id JOIN ronde ON ronde.partai_id=partai.id JOIN arena ON ronde.arena_id=arena.id WHERE partai_id="'.$_GET['id'].'" AND ronde.id="'.$_GET['ronde-id'].'" GROUP BY partai.id ');
while ($data_pertandingan = mysqli_fetch_array($query_pertandingan)) {
?>
<div class="content-wrapper">
    <!-- Main content -->
    <section class="content" style="background-color: #fff;">
        <div class="modal modal-info fade" id="modal-biru">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title">Vote Sudut Biru</h4>
                        <div class="btn-group btn-block" style="margin-top: 2rem;">
                            <button class="btn btn-lg btn-block bg-navy">Jatuhan</button>
                            <button class="btn btn-lg btn-block bg-navy" style="margin-top: 2rem;">Binaan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal modal-danger fade" id="modal-merah">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title">Vote Sudut Biru</h4>
                        <div class="btn-group btn-block" style="margin-top: 2rem;">
                            <button class="btn btn-lg btn-block btn-warning">Jatuhan</button>
                            <button class="btn btn-lg btn-block btn-warning" style="margin-top: 2rem;">Binaan</button>
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
                                        <th class="text-center bg-red">Peringatan</th>
                                        <th class="text-center bg-red">Teguran</th>
                                        <th class="text-center bg-red">Binaan</th>
                                        <th class="text-center bg-red">Hukuman</th>
                                        <th class="text-center bg-red">Jatuhan</th>

                                        <th class="text-center bg-black">Babak</th>
                                        
                                        <th class="text-center bg-blue">Jatuhan</th>
                                        <th class="text-center bg-blue">Hukuman</th>
                                        <th class="text-center bg-blue">Binaan</th>
                                        <th class="text-center bg-blue">Teguran</th>
                                        <th class="text-center bg-blue">Peringatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $query_ronde = mysqli_query($koneksi, 'SELECT ronde.id AS ronde_id,ronde.ronde,ronde.status_ronde FROM partai JOIN ronde ON ronde.partai_id=partai.id WHERE partai_id='.$_GET['id']);
                                    while ($data_ronde = mysqli_fetch_array($query_ronde)) {
                                    ?>
                                    <tr>
                                        <!-- peringatan tim merah -->
                                        <td class="text-center">
                                            <?php
                                            $nilai_id = 4;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,SUM( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($peringatan_merah = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $peringatan_merah['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end peringatan tim merah --> 
                                        <!-- teguran tim merah -->
                                        <td class="text-center">
                                            <?php
                                            $nilai_id = 5;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($teguran_merah = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $teguran_merah['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end teguran tim merah -->
                                        <!-- binaan tim merah -->
                                        <td class="text-center">
                                            <?php
                                            $nilai_id = 6;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($binaan_nilai_merah = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $binaan_nilai_merah['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end binaan tim merah -->
                                        <!-- hukuman tim merah -->
                                        <td class="text-center">
                                            <?php
                                            $nilai_b = 6;
                                            $nilai_t = 5;
                                            $nilai_p = 4;
                                            $peringatan_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_p.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $teguran_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_t.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $binaan_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_b.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $binaan_nilai_merah = mysqli_fetch_array($binaan_merah);
                                            if($binaan_nilai_merah){
                                                $nilaiHukuman = hitungNilaiHukuman($binaan_nilai_merah['nilai']);
                                                // echo "Nilai Hukuman berdasarkan Binaan: " . $nilaiHukuman . "<br>";

                                                // Query untuk mengambil data nilai teguran
                                                $teguran_merah = mysqli_query($koneksi, 'SELECT COUNT(nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_t.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                                
                                                // Ambil nilai teguran
                                                $teguran_nilai_merah = 0; // Inisialisasi dengan 0
                                                while ($row = mysqli_fetch_array($teguran_merah)) {
                                                    $teguran_nilai_merah += $row['nilai'];
                                                }

                                                // echo "Nilai Hukuman + Nilai Teguran: " . ($nilaiHukuman + $teguran_nilai_merah) . "<br>";

                                                // Query untuk mengambil data nilai peringatan
                                                $peringatan_merah = mysqli_query($koneksi, 'SELECT COUNT(nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_p.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');

                                                // Ambil nilai peringatan
                                                $peringatan_nilai_merah = 0; // Inisialisasi dengan 0
                                                while ($row = mysqli_fetch_array($peringatan_merah)) {
                                                    $peringatan_nilai_merah += $row['nilai'];
                                                }

                                                echo ($nilaiHukuman + $teguran_nilai_merah + $peringatan_nilai_merah);
                                            }
                                            ?>
                                        </td>
                                        <!-- end hukuman tim merah -->
                                        <!-- jatuhan tim merah -->
                                        <td class="text-danger">
                                            <?php
                                            $nilai_id = 3;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($jatuhan_nilai_merah = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $jatuhan_nilai_merah['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end jatuhan tim merah -->
                                        
                                        <!-- RONDE -->
                                        <td class="text-center <?= $data_ronde['ronde'] == $_GET['ronde-id'] ? 'bg-black' : 'bg-warning' ?>">
                                            <a href="<?= base_url() ?>/nilai-dewan/penilaian?id=<?= $_GET['id'] ?>&ronde-id=<?= $data_ronde['ronde'] ?>" style="text-decoration: none; display: block;">
                                                <strong><?= $data_ronde['ronde'] ?></strong>
                                            </a>
                                        </td>
                                        <!-- END RONDE -->

                                        <!-- jatuhan tim biru -->
                                        <td class="text-primary text-right">
                                            <?php
                                            $nilai_id = 3;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,GROUP_CONCAT(nilai.nilai SEPARATOR " ") AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($jatuhan_biru = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $jatuhan_biru['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end jatuhan tim biru -->
                                        <!-- hukuman tim biru -->
                                        <td class="text-center text-primary">
                                            <?php
                                            $nilai_b = 6;
                                            $nilai_t = 5;
                                            $nilai_p = 4;
                                            $peringatan_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_p.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $teguran_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_t.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $binaan_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_b.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            $binaan_nilai_merah = mysqli_fetch_array($binaan_merah);
                                            if($binaan_nilai_merah){
                                                $nilaiHukuman = hitungNilaiHukuman($binaan_nilai_merah['nilai']);
                                                // echo "Nilai Hukuman berdasarkan Binaan: " . $nilaiHukuman . "<br>";

                                                // Query untuk mengambil data nilai teguran
                                                $teguran_merah = mysqli_query($koneksi, 'SELECT COUNT(nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_t.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                                
                                                // Ambil nilai teguran
                                                $teguran_nilai_merah = 0; // Inisialisasi dengan 0
                                                while ($row = mysqli_fetch_array($teguran_merah)) {
                                                    $teguran_nilai_merah += $row['nilai'];
                                                }

                                                // echo "Nilai Hukuman + Nilai Teguran: " . ($nilaiHukuman + $teguran_nilai_merah) . "<br>";

                                                // Query untuk mengambil data nilai peringatan
                                                $peringatan_merah = mysqli_query($koneksi, 'SELECT COUNT(nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_p.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');

                                                // Ambil nilai peringatan
                                                $peringatan_nilai_merah = 0; // Inisialisasi dengan 0
                                                while ($row = mysqli_fetch_array($peringatan_merah)) {
                                                    $peringatan_nilai_merah += $row['nilai'];
                                                }

                                                echo ($nilaiHukuman + $teguran_nilai_merah + $peringatan_nilai_merah);
                                            }
                                            ?>
                                        </td>
                                        <!-- end hukuman tim biru -->
                                        <!-- binaan tim biru -->
                                        <td class="text-primary text-center">
                                            <?php
                                            $nilai_id = 6;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($binaan_biru = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $binaan_biru['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end binaan tim biru -->
                                        <!-- teguran tim biru -->
                                        <td class="text-primary text-center">
                                            <?php
                                            $nilai_id = 5;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($teguran_biru = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $teguran_biru['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end teguran tim biru -->
                                        <!-- peringatan tim biru -->
                                        <td class="text-primary text-center">
                                            <?php
                                            $nilai_id = 4;
                                            $query_nilai_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,SUM( nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_biru_id'].'" AND ronde.id="'.$data_ronde['ronde'].'" AND users.id="'.$_SESSION['id'].'" AND penilaian.nilai_id="'.$nilai_id.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                                            while ($peringatan_biru = mysqli_fetch_array($query_nilai_merah)) {
                                            ?>
                                            <?= $peringatan_biru['nilai'] ?>
                                            <?php } ?>
                                        </td>
                                        <!-- end peringatan tim biru -->
                                    </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>

                        <?php 
                            if($data_pertandingan['status_ronde'] == 'aktif'){
                        ?>
                        <div class="fixed-bottom-buttons">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat btn-danger btn-lg" id="jatuhan-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>">
                                                Jatuhan
                                            </button>
                                            <button class="button btn btn-flat btn-danger btn-lg" id="binaan-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Binaan
                                            </button>
                                        </div>
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat btn-danger btn-lg" id="teguran-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>">
                                                Teguran
                                            </button>
                                            <button class="button btn btn-flat btn-danger btn-lg" id="peringatan-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Peringatan
                                            </button>
                                        </div>
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat btn-success btn-lg" data-toggle="modal"
                                                data-target="#modal-merah">
                                                Vote
                                            </button>
                                            <button class="button btn btn-flat btn-warning btn-lg" id="hapus-m" atlitId="<?= $data_pertandingan['tim_merah_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 text-right">
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat btn-success btn-lg" data-toggle="modal"
                                                data-target="#modal-biru">
                                                Vote
                                            </button>
                                            <button class="button btn btn-flat btn-warning btn-lg" id="hapus-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Hapus
                                            </button>
                                        </div>
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat bg-blue btn-lg" id="teguran-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>">
                                                Teguran
                                            </button>
                                            <button class="button btn btn-flat bg-blue btn-lg" id="peringatan-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Peringatan
                                            </button>
                                        </div>
                                        <div class="btn-group-vertical" style="margin-right: 1.5rem;">
                                            <button class="button btn btn-flat bg-blue btn-lg" id="jatuhan-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>">
                                                Jatuhan
                                            </button>
                                            <button class="button btn btn-flat bg-blue btn-lg" id="binaan-b" atlitId="<?= $data_pertandingan['tim_biru_id'] ?>"
                                                style="margin-top: 1.5rem;">
                                                Binaan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->
<?php } ?>