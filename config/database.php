<?php 
   $koneksi = mysqli_connect("localhost", "root", "1234", "db_esilat");

   if (mysqli_connect_errno()){
      echo "Koneksi database gagal : " . mysqli_connect_error();
   }
?>