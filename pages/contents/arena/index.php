<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Arena
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
                    <a href="<?= base_url() ?>master-nilai/create" class="btn btn-primary"><i class="fa fa-plus"></i> Tambah Arena</a>
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
                            <th>Nama Arena Pertandingan</th>
                            <th width="20" class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $no = 1;
                        $query_akun = mysqli_query($koneksi, 'SELECT * FROM arena');
                        while ($data_akun = mysqli_fetch_array($query_akun)) {
                        ?>
                            <tr>
                                <td class="text-center"><?= $no++ ?></td>
                                <td><?= $data_akun['arena'] ?></td>
                                <td class="text-center">
                                    <a href="<?= base_url() ?>process/master-nilai/update.php?id=<?= $data_akun['id_detail_kelas'] ?>" class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></a>
                                    <a href="<?= base_url() ?>process/master-nilai/hapus.php?id=<?= $data_akun['id_detail_kelas'] ?>" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a>
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