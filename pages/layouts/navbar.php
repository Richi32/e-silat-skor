<body class="hold-transition skin-blue layout-top-nav">
  <div class="wrapper">

    <div class="wrapper">
        <header class="main-header">
            <nav class="navbar navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <a href="<?= base_url() ?>index" class="navbar-brand">
                            <b>E -</b>
                            Silat Skor
                        </a>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li <?= $uri2[0] == "index" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>index">
                                    Beranda
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <?php 
                                if($_SESSION['role'] == 'operator') {
                            ?>
                            <li <?= $uri2[0] == "daftar-akun" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>daftar-akun/index">Daftar Akun</a>
                            </li>
                            <li <?= $uri2[0] == "master-nilai" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>master-nilai/index">Master Nilai</a>
                            </li>
                            <li <?= $uri2[0] == "peserta" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>peserta/index">Peserta</a>
                            </li>
                            <li <?= $uri2[0] == "arena" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>arena/index">Arena</a>
                            </li>
                            <li <?= $uri2[0] == "pertandingan" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>pertandingan/index">Pertandingan</a>
                            </li>
                            <?php } ?>
                            <?php 
                                if($_SESSION['role'] == 'juri_1' || $_SESSION['role'] == 'juri_2' || $_SESSION['role'] == 'juri_3') {
                            ?>
                            <li <?= $uri2[0] == "nilai-juri" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>nilai-juri/index">Nilai Juri</a>
                            </li>
                            <?php } ?>
                            <?php 
                                if($_SESSION['role'] == 'dewan_juri') {
                            ?>
                            <li <?= $uri2[0] == "nilai-dewan" ? "class = 'active'" : "" ?>>
                                <a href="<?= base_url() ?>nilai-dewan/index">Nilai Dewan Juri</a>
                            </li>
                            <?php } ?>
                        </ul>
                    </div>

                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="dropdown user user-menu">

                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">

                                    <img src="../../dist/img/user2-160x160.jpg" class="user-image" alt="User Image">

                                    <span class="hidden-xs"><?= $_SESSION['nama_user'] ?></span>
                                </a>
                                <ul class="dropdown-menu">

                                    <li class="user-footer">
                                        <a href="<?= base_url() ?>process/auth/logout.php" class="btn btn-default btn-flat"><i class="fa fa-sign-out"></i> Sign out</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </header>