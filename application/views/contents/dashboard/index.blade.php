@section('content')
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Selamat datang di aplikasi E - Silat Skor
				<small>Aplikasi penjurian silat</small>
      </h1>
      <ol class="breadcrumb">
        <li><i class="fa fa-dashboard"></i> Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
				<div class="col-md-4">
					{{-- <h4>Jadwal mengajar hari ini</h4>
					<div class="box box-primary box-solid" style="height: 100%;">
            <div class="box-header with-border">
              <h3 class="box-title">
								<b>Senin</b>
							</h3>
            </div>
            <div class="box-body" id="getDataHariIni">
              
            </div>
            <div id="loadJadwalHariIni" class="overlay">
              <i class="fa fa-refresh fa-spin"></i>
            </div>     
          </div> --}}
				</div>
			</div>
    </section>
    <!-- /.content -->
  </div>
@endsection

@section('js')
  <script src="<?= base_url() ?>assets/dashboard/dashboard.js"></script>
@endsection

@extends('layouts.themplate')
