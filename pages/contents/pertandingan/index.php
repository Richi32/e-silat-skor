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
                    <a href="<?= base_url() ?>master-nilai/create" class="btn btn-primary"><i class="fa fa-plus"></i> Tambah Pertandingan</a>
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
                            <th class="text-center">Ronde</th>
                            <th>Waktu</th>
                            <th>Pertandingan</th>
                            <th>Jenis</th>
                            <th>Status</th>
                            <th width="80" class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $no = 1;
                        $query_pertandingan = mysqli_query($koneksi, 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_merah.nama AS nama_atlit_merah,ronde.id AS ronde_id,ronde.ronde,ronde.status_ronde,ronde.waktu_pertandingan,arena.arena FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id JOIN ronde ON ronde.partai_id=partai.id JOIN arena ON ronde.arena_id=arena.id');
                        while ($data_pertandingan = mysqli_fetch_array($query_pertandingan)) {
                        ?>
                            <tr>
                                <td class="text-center" style="vertical-align: middle;"><?= $no++ ?></td>
                                <td>
                                    <strong><?= $data_pertandingan['arena'] ?></strong>
                                </td>
                                <td class="bg-danger" style="vertical-align: middle;">
                                    <?= $data_pertandingan['nama_atlit_merah'] ?>
                                </td>
                                <td class="bg-primary" style="vertical-align: middle;">
                                    <?= $data_pertandingan['nama_atlit_biru'] ?>
                                </td>
                                <td class="text-center" style="vertical-align: middle;">
                                    <?= $data_pertandingan['ronde'] ?>
                                </td>
                                <td style="vertical-align: middle;">
                                    <?= $data_pertandingan['waktu_pertandingan'] ?>
                                </td>
                                <td style="vertical-align: middle;">
                                    <?= $data_pertandingan['partai'] ?>
                                </td>
                                <td style="vertical-align: middle;">
                                    <?= $data_pertandingan['pertandingan'] ?>
                                </td>
                                <td class="text-center" style="vertical-align: middle;">
                                    <?php if($data_pertandingan['status_ronde'] == 'nonaktif'){ ?>
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-play"></i> Nonaktif
                                        </button>
                                    <?php }else{ ?>
                                        <button class="btn btn-sm btn-danger">
                                            <i class="fa fa-stop"></i> Berlangsung
                                        </button>
                                    <?php } ?>
                                </td>
                                <td class="text-center" style="vertical-align: middle;">
                                    <a href="<?= base_url() ?>process/papan-skor/papan-skor.php?id=<?= $data_pertandingan['id'] ?>&ronde-id=<?= $data_pertandingan['ronde_id'] ?>"" class="btn btn-sm btn-primary" target="blank"><i class="fa fa-tv"></i></a>
                                    <a href="<?= base_url() ?>process/master-nilai/update.php?id=<?= $data_pertandingan['id'] ?>" class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></a>
                                    <a href="<?= base_url() ?>process/master-nilai/hapus.php?id=<?= $data_pertandingan['id'] ?>" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div><!-- /.box -->

        <div class="modal fade" id="modal-upload-file">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Upload format excel</h4>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <div class="mb-3 row">
                                    <label class="col-sm-2 col-form-label">Upload File Excel</label>
                                    <div class="col-sm-10">
                                        <input type="file" id="file" class="form-control" placeholder="Masukkan file" required />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="mb-3 row">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-10">
                                        <span class="text-danger">*</span> Untuk format excel bisa di download melalui tombol dibawah ini.
                                        <p></p>
                                        <a href="" class="btn btn-sm btn-success"><i class="fa fa-download"></i> Download format excel</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="mb-3 row">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>

    </section><!-- /.content -->
</div><!-- /.content-wrapper -->