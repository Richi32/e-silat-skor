<?php
include_once("../../config/database.php");
include_once('../../library/helper.php');

$query_pertandingan = mysqli_query($koneksi, 'SELECT partai.*,atlit_biru.nama AS nama_atlit_biru,atlit_biru.kontingen AS kontingen_biru,atlit_merah.kontingen AS kontingen_merah,atlit_merah.nama AS nama_atlit_merah,arena.arena, ronde.status_ronde, ronde.waktu_pertandingan FROM partai JOIN atlit AS atlit_biru ON partai.tim_biru_id=atlit_biru.id JOIN atlit AS atlit_merah ON partai.tim_merah_id=atlit_merah.id JOIN ronde ON ronde.partai_id=partai.id JOIN arena ON ronde.arena_id=arena.id WHERE partai_id="'.$_GET['id'].'" AND ronde.id="'.$_GET['ronde-id'].'" GROUP BY partai.id ');
while ($data_pertandingan = mysqli_fetch_array($query_pertandingan)) {
// if (isset($_SESSION['status']) != 'login') {
//   $_SESSION['massage'] = 'belum_login';
//   redirect('auth');
// }
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>E-Silat Skor</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/dist/css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/plugins/iCheck/square/blue.css">
  <!-- DataTables -->
  <link rel="stylesheet"
    href="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
  <!-- daterange picker -->
  <link rel="stylesheet"
    href="https://adminlte.io/themes/AdminLTE/bower_components/bootstrap-daterangepicker/daterangepicker.css">
  <!-- bootstrap datepicker -->
  <link rel="stylesheet"
    href="https://adminlte.io/themes/AdminLTE/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
  <!-- Animate -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />


  <link href="https://repo.rachmat.id/jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet">

  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/bower_components/select2/dist/css/select2.min.css">

  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="https://adminlte.io/themes/AdminLTE/dist/css/skins/_all-skins.min.css">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.33/dist/sweetalert2.min.css">


  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <!-- Google Font -->
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">


  <!-- jQuery 3 -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/jquery/dist/jquery.min.js"></script>
  <!-- jQuery 3 -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/jquery-ui/jquery-ui.min.js"></script>
  <!-- <script src="<?= base_url() ?>dist/js/jquery-ui-main/ui/i18n/datepicker-id.js"></script> -->
  <!-- <script src="i18n/datepicker-id.js"></script> -->

  <script>
    var base_url = window.location.origin;
  </script>
</head>

<body class="hold-transition layout-top-nav">
  <div class="content-wrapper">
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body table-responsive">
                <div
                  style="color: white; text-align: center; left: 0; right: 0; background: linear-gradient(to right, #f00, #00f);">
                  <h1>PAPAN SKOR</h1>
                </div>
                <table class="table">
                  <tbody>
                    <tr>
                      <td
                        style="color: white; text-align: center; left: 0; right: 0; background: linear-gradient(to right, #f00, #00f); text-transform: uppercase;"
                        class="text-center font-weight-bold" colspan="10">MONITOR PENILAIAN
                        <?= $data_pertandingan['arena'] ?> :
                        <?= $data_pertandingan['pertandingan'] ?> -
                        <?= $data_pertandingan['partai'] ?>
                      </td>
                    </tr>
                    <tr>
                      <td class="h2 text-left" colSpan={4} style="text-transform: uppercase; vertical-align: middle;">
                        <?= $data_pertandingan['kontingen_merah'] ?>
                      </td>
                      <td class="text-center col-4 font-weight-bold h1" colSpan={2}>

                        <span id="timer">00:00:00:000</span>
                        <br>
                        <button id="startBtn">
                          <i class="fa fa-play"></i>
                        </button>
                        <button id="pauseBtn">
                          <i class="fa fa-pause"></i>
                        </button>
                        <button id="stopBtn">
                          <i class="fa fa-stop"></i>
                        </button>

                      </td>
                      <td class="text-right h2" colSpan={4} style="text-transform: uppercase; vertical-align: middle;">
                        <?= $data_pertandingan['kontingen_biru'] ?>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left text-danger" colSpan={5}>
                        <strong style="font-size: 2rem; text-transform: uppercase; vertical-align: middle;"><?= $data_pertandingan['nama_atlit_merah'] ?></strong>
                      </td>
                      <td></td>
                      <td class="text-right text-primary" colSpan={4}>
                        <strong style="font-size: 2rem; text-transform: uppercase; vertical-align: middle;"><?= $data_pertandingan['nama_atlit_biru'] ?></strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table class="table" style="height: 30vh;">
                  <tr>
                    <!-- tim merah -->
                    <td>
                      <?php
                      $nilai_t = 5;
                      $teguran_merah = mysqli_query($koneksi, 'SELECT penilaian.id,ronde.ronde,users.nama AS nama_user,atlit.nama AS nama_atlit,COUNT(nilai.nilai) AS nilai FROM penilaian JOIN ronde ON penilaian.ronde_id=ronde.id JOIN users ON penilaian.users_id=users.id JOIN atlit ON penilaian.atlit_id=atlit.id JOIN nilai ON penilaian.nilai_id=nilai.id WHERE atlit.id="'.$data_pertandingan['tim_merah_id'].'" AND ronde.id="'.$_GET['ronde-id'].'" AND penilaian.nilai_id="'.$nilai_t.'" AND ronde.status_ronde="aktif" GROUP BY atlit.id');
                      $teguran_nilai_merah = mysqli_fetch_array($teguran_merah);

                      if ($teguran_nilai_merah) {
                          $hasil_teguran = $teguran_nilai_merah['nilai'] % 3;
                          if ($hasil_teguran == 0) {
                              ?>
                              <div style="background-color: red; display: inline-block;">
                                  <img src="<?= base_url() ?>dist/img/Teguran1.png" alt="Teguran1.png" width="40" height="30" />
                              </div>
                          <?php } else { ?>
                              <img src="<?= base_url() ?>dist/img/Teguran1.png" alt="Teguran1.png" width="40" height="30" />
                          <?php }
                      }
                      ?>
                    </td>
                    <td colspan="2">
                      <img src="<?= base_url() ?>dist/img/Teguran2.png" alt="Teguran1.png" width="40"
                                height="30" />
                    </td>
                    <!-- end tim merah -->
                    <!-- nilai tim merah -->
                    <td class="text-center bg-red" width="350"
                        style="vertical-align: middle; font-size: 100px;" rowspan="3">
                        <strong id="nilaiMerah">6</strong>
                    </td>
                    <!-- end nilai tim merah -->
                    <!-- ronde -->
                    <td rowspan="3">
                      <table class="table" style="height: 100%;">
                        <?php
                        $query_ronde = mysqli_query($koneksi, 'SELECT ronde.id AS ronde_id,ronde.ronde,ronde.status_ronde FROM partai JOIN ronde ON ronde.partai_id=partai.id WHERE partai_id='.$_GET['id']);
                        while ($data_ronde = mysqli_fetch_array($query_ronde)) {
                        ?>
                        <tr>
                          <td class="text-center <?= $data_ronde['ronde'] == $_GET['ronde-id'] ? 'bg-olive' : '' ?>" style="vertical-align: middle;">
                              <a href="<?= base_url() ?>/nilai-dewan/penilaian?id=<?= $_GET['id'] ?>&ronde-id=<?= $data_ronde['ronde'] ?>" style="text-decoration: none; color: #000; display: block;">
                                  <strong><?= $data_ronde['ronde'] ?></strong>
                              </a>
                          </td>
                        </tr>
                        <?php } ?>
                      </table>
                    </td>
                    <!-- end ronde -->
                    <!-- nilai tim biru -->
                    <td class="text-center bg-primary" width="350"
                        style="vertical-align: middle; font-size: 100px;" rowspan="3">
                        <strong id="nilaiBiru">6</strong>
                    </td>
                    <!-- end nilai tim biru -->
                    <!-- tim biru -->
                    <td class="text-right" colspan="2">
                      <img src="<?= base_url() ?>dist/img/Teguran1.png" alt="Teguran1.png" width="40"
                                height="30" />
                    </td>
                    <td class="text-right">
                      <img src="<?= base_url() ?>dist/img/Teguran2.png" alt="Teguran1.png" width="40"
                                height="30" />
                    </td>
                    <!-- end tim biru -->
                  </tr>
                  <tr>
                    <!-- tim merah -->
                    <td>
                      <img src="<?= base_url() ?>dist/img/Binaan1.png" alt="Binaan1.png" width="30"
                                height="40" />
                    </td>
                    <td colspan="2">
                      <img src="<?= base_url() ?>dist/img/Binaan2.png" alt="Binaan1.png" width="30"
                                height="40" />
                    </td>
                    <!-- end tim merah -->
                    <!-- tim biru -->
                    <td class="text-right" colspan="2">
                      <img src="<?= base_url() ?>dist/img/Binaan1.png" alt="Binaan1.png" width="30"
                                height="40" />
                    </td>
                    <td class="text-right">
                      <img src="<?= base_url() ?>dist/img/Binaan2.png" alt="Binaan1.png" width="30"
                                height="40" />
                    </td>
                    <!-- end tim biru -->
                  </tr>
                  <tr>
                    <!-- tim merah -->
                    <td>
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <td>
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <td>
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <!-- end tim merah -->
                    <!-- tim biru -->
                    <td class="text-right">
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <td class="text-right">
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <td class="text-right">
                      <img src="<?= base_url() ?>dist/img/Peringatan.png" alt="Peringatan.png" width="30"
                                height="30" />
                    </td>
                    <!-- end tim biru -->
                  </tr>
                </table>

                <table table class="table">
                  <tbody>
                    <tr style="background-color: #9e9e9e;">
                      <td class="text-center font-weight-bold">JURI 1</td>
                      <td class="text-center font-weight-bold">JURI 2</td>
                      <td class="text-center font-weight-bold">JURI 3</td>
                      <td class="col-1">
                        <div class="row text-center">
                          <div>
                            <img src="<?= base_url() ?>dist/img/Tinju.png" alt="Tinju.png" width="30" height="30" />
                          </div>
                        </div>
                      </td>
                      <td class="col-1">
                        <div class="row text-center">
                          <div>
                            <img src="<?= base_url() ?>dist/img/Tinju.png" alt="Tinju.png" width="30" height="30" />
                          </div>
                        </div>
                      </td>
                      <td class="text-center font-weight-bold">JURI 1</td>
                      <td class="text-center font-weight-bold">JURI 2</td>
                      <td class="text-center font-weight-bold">JURI 3</td>
                    </tr>
                    <tr style="background-color: #dbdbdb;">
                      <td class="text-center font-weight-bold">JURI 1</td>
                      <td class="text-center font-weight-bold">JURI 2</td>
                      <td class="text-center font-weight-bold">JURI 3</td>
                      <td>
                        <div class="row text-center">
                          <div>
                            <img src="<?= base_url() ?>dist/img/Tendang.png" alt="Tendang.png" width="30" height="30" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="row text-center">
                          <div>
                            <img src="<?= base_url() ?>dist/img/Tendang.png" alt="Tendang.png" width="30" height="30" />
                          </div>
                        </div>
                      </td>
                      <td class="text-center font-weight-bold">JURI 1</td>
                      <td class="text-center font-weight-bold">JURI 2</td>
                      <td class="text-center font-weight-bold">JURI 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  </div><!-- ./wrapper -->

  <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
  <script>
    $.widget.bridge('uibutton', $.ui.button);
  </script>
  <!-- Bootstrap 3.3.7 -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
  <!-- DataTables -->
  <script
    src="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
  <script
    src="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
  <!-- date-range-picker -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/moment/min/moment.min.js"></script>
  <script
    src="https://adminlte.io/themes/AdminLTE/bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
  <!-- bootstrap datepicker -->
  <script
    src="https://adminlte.io/themes/AdminLTE/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
  <!-- FastClick -->
  <script src="https://adminlte.io/themes/AdminLTE/bower_components/fastclick/lib/fastclick.js"></script>
  <!-- AdminLTE App -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/js/adminlte.min.js"></script>
  <!-- SlimScroll -->
  <script
    src="https://adminlte.io/themes/AdminLTE/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
  <!-- iCheck -->
  <script src="https://adminlte.io/themes/AdminLTE/plugins/iCheck/icheck.min.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.33/dist/sweetalert2.all.min.js"></script>

  <script src="https://adminlte.io/themes/AdminLTE/bower_components/select2/dist/js/select2.full.min.js"></script>

  <script src="https://adminlte.io/themes/AdminLTE/bower_components/ckeditor/ckeditor.js"></script>

  <script src="<?= base_url() ?>library/helper.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="https://adminlte.io/themes/AdminLTE/dist/js/demo.js"></script>

  <script>
    let timerInterval;
    let timerPaused = false;
    let millisecondsRemaining = 0;

    function menitKeMilisecond(menit) {
      const milisecondPerMenit = 60 * 1000; // 1 menit = 60 detik * 1000 milidetik
      return menit * milisecondPerMenit;
    }

    function updateTimerDisplay() {
      let hours = Math.floor(millisecondsRemaining / 3600000);
      let minutes = Math.floor((millisecondsRemaining % 3600000) / 60000);
      let seconds = Math.floor((millisecondsRemaining % 60000) / 1000);
      let milliseconds = millisecondsRemaining % 1000;

      let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
      document.getElementById('timer').textContent = formattedTime;
    }

    function playSound(soundFile) {
      let sound = new Audio(soundFile);
      sound.play();
    }

    function startTimer() {
      if (timerPaused) {
        timerPaused = false;
      } else {
        let timeVar = <?= $data_pertandingan['waktu_pertandingan'] ?>;
        console.log(timeVar)
        millisecondsRemaining = menitKeMilisecond(timeVar); // Set the timer to the initial value (10 seconds)
        const audio = new Audio('<?= base_url() ?>dist/sounds/sempritan.mp3');
        audio.play();
      }

      updateTimerDisplay();

      timerInterval = setInterval(function () {
        if (millisecondsRemaining > 0) {
          millisecondsRemaining -= 10;
          updateTimerDisplay();
        } else {
          const audio = new Audio('<?= base_url() ?>dist/sounds/timer-habis.mp3');
          audio.play();
          stopTimer();
        }
      }, 10);
    }

    function pauseTimer() {
      timerPaused = true;
      clearInterval(timerInterval);
    }

    function stopTimer() {
      timerPaused = false;
      clearInterval(timerInterval);
      millisecondsRemaining = 0;
      updateTimerDisplay();
    }

    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
    document.getElementById('stopBtn').addEventListener('click', stopTimer);
  </script>

  <script>
    $(document).ready(function(){
      
    })
  </script>
</body>

</html>

</body>

</html>
<?php } ?>