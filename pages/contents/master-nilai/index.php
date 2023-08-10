<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Master Nilai
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <!-- Default box -->
        <div class="box box-info">
            <div class="box-body">
                <table class="table table-condensed table-striped table-bordered table-hover" id="data-table">
                    <thead class="bg-info">
                        <tr>
                            <th width="10" class="text-center">No</th>
                            <th>Jenis</th>
                            <th>Nilai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $no = 1;
                        $query_akun = mysqli_query($koneksi, 'SELECT * FROM nilai');
                        while ($data_akun = mysqli_fetch_array($query_akun)) {
                        ?>
                            <tr>
                                <td class="text-center" style="vertical-align: middle;"><?= $no++ ?></td>
                                <td style="vertical-align: middle;"><?= $data_akun['jenis'] ?></td>
                                <td>
                                    <input type="text" name="nilai" class="form-control" id="<?= $data_akun['id'] ?>" value="<?= $data_akun['nilai'] ?>" style="width: 100%;">
                                </td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div><!-- /.box -->

    </section><!-- /.content -->
</div><!-- /.content-wrapper -->