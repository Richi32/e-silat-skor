<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>E - Silat Skor</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/dist/css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/plugins/iCheck/square/blue.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<body class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <div class="row">
        <div class="col-sm-3">
          <div style="width: 100%;">
            <!-- <img src="../../dist/img/man/logo-man.png" alt="logo" style="max-width: 80px;" class="img-responsive"> -->
          </div>
        </div>
        <div class="col-sm-9 text-left" style="font-size: .8em;">
          <a href="<?= base_url() ?>">
            <b>E -</b> Silat Skore <br> 
            <small style="font-size: .7em;">Aplikasi penilaian skor silat</small>
          </a>
        </div>
      </div>
    </div>

    <?php

    if (isset($_SESSION['massage'])) {
      if ($_SESSION['massage'] == "gagal") {
        echo '
            <div class="alert alert-danger alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <i class="icon fa fa-ban"></i> Login gagal ! Username atau Password salah !
            </div>
          ';
      } else if ($_SESSION['massage'] == "logout") {
        echo '
            <div class="alert alert-success alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <i class="icon fa fa-check"></i> Anda telah berhasil logout
            </div>
          ';
      } else if ($_SESSION['massage'] == "belum_login") {
        echo '
            <div class="alert alert-warning alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <i class="icon fa fa-warning"></i> Anda harus login terlebih dahulu untuk mengakses halaman admin
            </div>
          ';
      }
    }
    ?>

    <!-- /.login-logo -->
    <div class="login-box-body">

      <form method="post" action="../../process/auth/login.php">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" name="username" placeholder="Masukkan Username" required>
          <span class="glyphicon glyphicon-pencil form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" name="password" placeholder="Masukkan Password" required>
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <select class="form-control" name="role" required>
            <option value="">-- Pilih Hak Akses --</option>
            <option value="operator">Operator</option>
            <option value="dewan_juri">Dewan Juri</option>
            <option value="juri_1">Juri 1</option>
            <option value="juri_2">Juri 2</option>
            <option value="juri_3">Juri 3</option>
          </select>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-12">
            <button type="submit" class="btn btn-success btn-block btn-flat"><i class="fa fa-check-square-o"></i> Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

    </div>
    <!-- /.login-box-body -->
  </div>
  <!-- /.login-box -->

  <div class="lockscreen-footer text-center">
    <strong>Copyright &copy; 2023 <a href="https://ittechproduction.com/" target="blank">IT TECH PRODUCTION</a>.</strong><br>
    All rights reserved
  </div>

  <!-- jQuery 3 -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/jquery/dist/jquery.min.js"></script>
  <!-- jQuery 3 -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/jquery-ui/jquery-ui.min.js"></script>

  <!-- iCheck -->
  <script src="https://adminlte.io/themes/AdminLTE/plugins/iCheck/icheck.min.js"></script>

  <!-- Bootstrap 3.3.7 -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script>
    $(function() {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  </script>
</body>

</html>