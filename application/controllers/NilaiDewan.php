<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class NilaiDewan extends CI_Controller {
	public function __construct(){
		parent::__construct();
		if($_SESSION['status'] !="login"){
			
            redirect('login');
        }
		$this->load->model('NilaiDewanModel');
		$this->load->model('VoteModel');
	}

	public function index()
	{
		view('contents.nilai-dewan.index');
	}

	public function penjurian(){
		view('contents.nilai-dewan.penilaian');
	}

	public function tampilData(){
		$partai_id = $this->input->post('partai_id');
		$ronde_id = $this->input->post('ronde_id');
		$data = $this->NilaiDewanModel->getDataPenjurian($partai_id, $ronde_id);
		echo json_encode($data);
	}

	public function tampilRonde(){
		$partai_id = $this->input->post('partai_id');
		$data = $this->NilaiDewanModel->getRonde($partai_id);
		echo json_encode($data);
	}

	public function tampilNilaiAtlitDewan(){
		$atlit_id = $this->input->post('atlit_id');
		$ronde_id = $this->input->post('ronde_id');
		$users_id = $_SESSION['id_user'];
		$nilai_id = $this->input->post('nilai_id');
		$data = $this->NilaiDewanModel->getNilai($atlit_id, $ronde_id, $users_id, $nilai_id);
		echo json_encode($data);
	}

	public function tampilNilaiHukuman(){
		$atlit_id = $this->input->post('atlit_id');
		$ronde_id = $this->input->post('ronde_id');
		$users_id = $_SESSION['id_user'];
		$nilai_t_id = $this->input->post('nilai_t_id');
		$nilai_p_id = $this->input->post('nilai_p_id');
		$data_t = $this->NilaiDewanModel->getNilai($atlit_id, $ronde_id, $users_id, $nilai_t_id);
		$data_p = $this->NilaiDewanModel->getNilai($atlit_id, $ronde_id, $users_id, $nilai_p_id);
		$nilai_t = isset($data_t[0]->nilai) ? $data_t[0]->nilai : null;
		$nilai_p = isset($data_p[0]->nilai) ? $data_p[0]->nilai : null;
		$hukuman = $nilai_t + $nilai_p;

		$data = array(
			'nilai' => $hukuman
		);
		echo json_encode($data);
	}

	public function tampilNilaiPeringatan(){
		$atlit_id = $this->input->post('atlit_id');
		$ronde_id = $this->input->post('ronde_id');
		$users_id = $_SESSION['id_user'];
		$nilai_id = $this->input->post('nilai_id');
		$data = $this->NilaiDewanModel->getPeringatan($atlit_id, $ronde_id, $users_id, $nilai_id);
		echo json_encode($data);
	}

	public function tampilNilaiJatuhan(){
		$atlit_id = $this->input->post('atlit_id');
		$ronde_id = $this->input->post('ronde_id');
		$users_id = $_SESSION['id_user'];
		$nilai_id = $this->input->post('nilai_id');
		$data = $this->NilaiDewanModel->getJatuhan($atlit_id, $ronde_id, $users_id, $nilai_id);
		echo json_encode($data);
	}

	public function tambahNilai(){
		$ronde_id = $this->input->post('ronde_id');
		$atlit_id = $this->input->post('atlit_id');
		$nilai_id = $this->input->post('nilai_id');
		$users_id = $_SESSION['id_user'];
		$time = date("Y-m-d h:i:s");
		$data = array(
			'ronde_id'	=> $ronde_id,
			'atlit_id' 	=> $atlit_id,
			'nilai_id'	=> $nilai_id,
			'users_id' 	=> $users_id,
			'time' 	=> $time,
		);

		$tambahNilai = $this->NilaiDewanModel->simpanData('penilaian', $data);
		return $tambahNilai;
	}

	public function tambahVote(){
		$nilai_id = $this->input->post('nilai_id');
		$sudut = $this->input->post('sudut');
		$time = date("Y-m-d h:i:s");
		$data = array(
			'nilai_id'	=> $nilai_id,
			'time' 	=> $time,
			'sudut' => $sudut
		);
		$tambahVote = $this->NilaiDewanModel->simpanData('vote', $data);
		return $tambahVote;
	}

	public function tampilDataVote(){
		$data = $this->VoteModel->getDataVoteDewan();
		echo json_encode($data);
	}

	public function hasilVote(){
		$data = $this->VoteModel->getDataVoteDewan();
		$numRows = count($data); // Menghitung jumlah baris
		if ($numRows > 0) {
			$row = $data[0]; // Mengambil baris pertama dari hasil kueri
			$id_vote = $row->id;
		} else {
			$id_vote = 0;
		}
		
		$dataVote = $this->VoteModel->getData($id_vote);
		$rowsVote = count($dataVote);
		if($rowsVote > 0){
			$vote = $dataVote[0]; 
			$nilai_id = $vote->nilai_id;
			$ronde_id = $this->input->post('ronde_id');
			$atlit_id = $this->input->post('atlit_id');
			$users_id = $_SESSION['id_user'];
			$time = date("Y-m-d h:i:s");
			$data = array(
				'ronde_id'	=> $ronde_id,
				'atlit_id' 	=> $atlit_id,
				'nilai_id'	=> $nilai_id,
				'users_id' 	=> $users_id,
				'time' 	=> $time,
			);

			$tambahNilai = $this->NilaiDewanModel->simpanData('penilaian', $data);
			return $tambahNilai;
		}
		echo json_encode($data);
	}

	public function hapusNilai(){
		$atlit_id = $this->input->post('atlit_id');
		$users_id = $_SESSION['id_user'];

		$hapusNilai = $this->NilaiDewanModel->deleteData($users_id, $atlit_id);
		return $hapusNilai;
	}

}
