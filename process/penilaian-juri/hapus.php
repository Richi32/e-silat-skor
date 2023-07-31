<?php
    include_once("../../config/database.php");
    include_once("../../library/helper.php");
    session_start();
    if ($_SESSION['status'] != "login") {
        $_SESSION['massage'] = 'belum_login';
        redirect('auth');
    }


    $users_id = $_GET['users_id'];
    $atlit_id = $_GET['atlit_id'];
    $query = mysqli_query($koneksi, 'DELETE FROM penilaian WHERE users_id = "'.$users_id.'" AND atlit_id = "'.$atlit_id.'" AND id=(SELECT id FROM penilaian WHERE users_id = "'.$users_id.'" AND atlit_id = "'.$atlit_id.'" ORDER BY id DESC LIMIT 1)');
    // echo 'UPDATE tbl_surat SET delete="y" WHERE id="' . $id . '"';

    return $query;
