<?php 
    // mengaktifkan session php
    session_start();
    
    // menghubungkan dengan koneksi
    include '../../config/database.php';
    include '../../library/helper.php';
    
    // menangkap data yang dikirim dari form
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $role = $_POST['role'];
    
    // menyeleksi data admin dengan username dan password yang sesuai
    $data = mysqli_query($koneksi,"select * from users where username='$username' and password='$password' and role='$role'");
       
    // menghitung jumlah data yang ditemukan
    $cek = mysqli_num_rows($data);
    // echo $cek;
    
    if($cek > 0){
        $_SESSION['username'] = $username;
        $_SESSION['status'] = "login";
        $_SESSION['role'] = $_POST['role'];

        while ($data_user = mysqli_fetch_array($data)) {
            $_SESSION['id'] = $data_user['id'];
            $_SESSION['nama_user'] = $data_user['nama'];          
        }

        redirect('index');
    }else{
        $_SESSION['massage'] = 'gagal';
        redirect('auth');
    }
?>