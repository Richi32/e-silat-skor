<?php 
    include_once("../../config/database.php");
    include_once("../../library/helper.php");
    session_start();
    if($_SESSION['status'] != "login"){
        $_SESSION['massage'] = 'belum_login';
        redirect('auth');
    }

    $nilai_id = $_POST['nilai_id'];
    $ronde_id = $_POST['ronde_id'];
    $users_id = $_POST['users_id'];    
    $atlit_id = $_POST['atlit_id'];

    $query = mysqli_query($koneksi, 'INSERT INTO penilaian (ronde_id, users_id, atlit_id, nilai_id) VALUES ('.$ronde_id.', '.$users_id.', '.$atlit_id.', '.$nilai_id.')');
    return $query;
