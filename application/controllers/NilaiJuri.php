<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class NilaiJuri extends CI_Controller {
	public function __construct(){
		parent::__construct();
		if($_SESSION['status'] !="login"){
			
            redirect('login');
        }
		$this->load->model('NilaiJuriModel');
		$this->load->model('VoteModel');
	}

	public function index()
	{
		view('contents.nilai-juri.index');
	}

	public function penjurian(){
		view('contents.nilai-juri.penilaian');
	}

	public function tampilData(){
		$partai_id = $this->input->post('partai_id');
		$ronde_id = $this->input->post('ronde_id');
		$data = $this->NilaiJuriModel->getDataPenjurian($partai_id, $ronde_id);
		echo json_encode($data);
	}

	public function tampilNilaiAtlitJuri(){
		$atlit_id = $this->input->post('atlit_id');
		$ronde_id = $this->input->post('ronde_id');
		$users_id = $_SESSION['id_user'];
		$data = $this->NilaiJuriModel->getNilai($atlit_id, $ronde_id, $users_id);
		echo json_encode($data);
	}

	public function tampilRonde(){
		$partai_id = $this->input->post('partai_id');
		$data = $this->NilaiJuriModel->getRonde($partai_id);
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

		$tambahNilai = $this->NilaiJuriModel->simpanData('penilaian', $data);
		return $tambahNilai;
	}

	public function tampilDataVote(){
		$juri = $_SESSION['role'];
		$data = $this->VoteModel->getDataVoteJuri($juri);
		echo json_encode($data);
	}

	public function updateDataVote(){
		$id = $this->input->post('id');
		$val = $this->input->post('val');
		$juri = $_SESSION['role'];

		$data = array(
			$juri	=> $val
		);

		$data = $this->VoteModel->updateDataVoteJuri('vote', $data, 'id = "'.$id.'"');
		echo json_encode($data);
	}

	public function hapusNilai(){
		$atlit_id = $this->input->post('atlit_id');
		$users_id = $_SESSION['id_user'];

		$hapusNilai = $this->NilaiJuriModel->deleteData($users_id, $atlit_id);
		return $hapusNilai;
	}

}
