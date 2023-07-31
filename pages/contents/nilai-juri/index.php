<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Pertandingan
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <!-- Default box -->
        <?php
        if (isset($_GET['pesan'])) {
            if ($_GET['pesan'] == "gagal") {
                echo '
                    <div class="alert alert-danger alert-dismissible">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <i class="icon fa fa-ban"></i> Data gagal disimpan !
                    </div>
                ';
            } else if ($_GET['pesan'] == "berhasil") {
                echo '
                        <div class="alert alert-success alert-dismissible">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i class="icon fa fa-check"></i> Data berhasil disimpan
                        </div>
                    ';
            }
        }
        ?>
        <div class="box box-success">
            <?php
            if ($_SESSION['role'] == 'operator') {
            ?>
            <div class="box-header">
                <a href="<?= base_url() ?>master-nilai/create" class="btn btn-primary"><i class="fa fa-plus"></i> Tambah
                    Pertandingan</a>
                <!-- <button type="button" class="btn btn-success" data-toggle="modal" id="modal-upload" data-id="" data-target="#modal-upload-file">
                        <i class="fa fa-file-excel-o"></i> Upload format Excel
                    </button> -->
            </div>
            <?php } ?>
            <div class="box-body">
                <table class="table table-condensed table-bordered table-hover" id="data-table">
                    <thead>
                        <tr>
                            <th width="5" class="text-center">No</th>
                            <th>Arena</th>
                            <th class="bg-red">Sudut Merah</th>
                            <th class="bg-blue">Sudut Biru</th>
                            <th>Ronde</th>
                            <th>Waktu</th>
                            <th>Pertandingan</th>
                            <th>Jenis</th>
                            <th>Status</th>
                            <th width="20" class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $no = 1;
                        $query_pertandingan = mysqli_query($koneksi, 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_merah.nama AS nama_atlit_merah,ronde.id AS ronde_id,ronde.ronde,ronde.status_ronde,ronde.waktu_pertandingan,arena.arena FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id JOIN ronde ON ronde.partai_id=partai.id JOIN arena ON ronde.arena_id=arena.id');
                        while ($data_pertandingan = mysqli_fetch_array($query_pertandingan)) {
                        ?>
                        <tr>
                            <td class="text-center">
                                <?= $no++ ?>
                            </td>
                            <td>
                                <strong>
                                    <?= $data_pertandingan['arena'] ?>
                                </strong>
                            </td>
                            <td class="bg-danger">
                                <?= $data_pertandingan['nama_atlit_merah'] ?>
                            </td>
                            <td class="bg-primary">
                                <?= $data_pertandingan['nama_atlit_biru'] ?>
                            </td>
                            <td>
                                <?= $data_pertandingan['ronde'] ?>
                            </td>
                            <td>
                                <?= $data_pertandingan['waktu_pertandingan'] ?>
                            </td>
                            <td>
                                <?= $data_pertandingan['partai'] ?>
                            </td>
                            <td>
                                <?= $data_pertandingan['pertandingan'] ?>
                            </td>
                            <td>
                                <?= $data_pertandingan['status_ronde'] ?>
                            </td>
                            <td class="text-center">
                                <a href="<?= base_url() ?>nilai-juri/penilaian?id=<?= $data_pertandingan['id'] ?>&ronde-id=<?= $data_pertandingan['ronde_id'] ?>"
                                    class="btn btn-sm btn-primary" target="blank"><i class="fa fa-tv"></i></a>
                            </td>
                        </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div><!-- /.box -->

    </section><!-- /.content -->
</div><!-- /.content-wrapper -->