$(document).ready(function () {
    getData();
    var base_url = window.location.origin;
    // setInterval(function () {
    //     getDataVote();
    // }, 1000);
    // console.log(id);
    // console.log(rondeId);

    function resetBinButtons() {
        $("#bin_m1").removeClass("bg-red bg-green");
        $("#bin_m2").removeClass("bg-red bg-green");
    }

    $(document).on("click", "#ronde_btn", function () {
        let rondeId = $(this).attr("ronde-id");
        let newUrl = window.location.href.split('?')[0] + '?id=1&ronde-id=' + rondeId;

        // Mengganti URL saat ini dengan URL baru
        window.location.replace(newUrl);

        resetBinButtons();
        getData();
    });

    function getData() {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);

        let id = urlParams.get('id')
        let rondeId = urlParams.get('ronde-id')

        $.ajax({
            type: "POST",
            url: "datanilaiskor",
            data: {
                partai_id: id,
                ronde_id: rondeId
            },
            async: false,
            dataType: "json",
            success: function (data) {
                var i;
                for (i = 0; i < data.length; i++) {
                    $("#arena").text(data[i].arena);
                    $("#pertandingan").text(data[i].pertandingan);
                    $("#kontingen_merah").text(data[i].kontingen_merah);
                    $("#nama_atlit_merah").text(data[i].nama_atlit_merah);
                    $("#kontingen_biru").text(data[i].kontingen_biru);
                    $("#nama_atlit_biru").text(data[i].nama_atlit_biru);

                    getRonde(id, rondeId);
                    
                    var tim_merah_id = data[i].tim_merah_id;
                    var tim_biru_id = data[i].tim_biru_id;
                    setInterval(function () {
                        updateIconBinaanMerah(tim_merah_id, rondeId);
                        updateIconBinaanBiru(tim_biru_id, rondeId);

                        updateIconTeguranMerah(tim_merah_id, rondeId);
                        updateIconTeguranBiru(tim_biru_id, rondeId);

                        updateIconPeringatanMerah(tim_merah_id, id);
                        updateIconPeringatanBiru(tim_biru_id, id);

                        getNilaiMerah(tim_merah_id, rondeId, id);
                        getNilaiBiru(tim_biru_id, rondeId, id);

                        getTombolJuri();
                    }, 1000);
                }
            },
        });
    }

    function getRonde(partai_id, ronde_id) {
        $.ajax({
            type: "POST",
            url: "datarondeskor",
            data: {
                partai_id: partai_id
            },
            dataType: "json",
            success: function (data) {
                let html = "";
                let i;
                for (i = 0; i < data.length; i++) {
                    html +=
                        "<tr ronde-id='" +
                        data[i].ronde_id +
                        "'>" +
                        "<td class='text-center ";
                    if (ronde_id == data[i].ronde_id) {
                        html += "bg-olive";
                    }
                    html +=
                        "' id='ronde_btn' ronde-id='" +
                        data[i].ronde_id +
                        "' style='cursor: pointer; vertical-align: middle'>" +
                        "<strong>" +
                        "<span id='ronde'>" +
                        data[i].ronde +
                        "</span>" +
                        "</strong>" +
                        "</td>" +
                        "</tr>";
                }
                $("#loadRonde").html(html);
            },
        });
    }

    function updateIconBinaanMerah(atlit_id, ronde_id) {
        $.ajax({
            type: "POST",
            url: "datahukumanskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                nilai_id: 6
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }

                    if (nilai >= 1) {
                        $("#bin_m1").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#bin_m1").removeClass("bg-red").addClass("bg-default");
                    }

                    if (nilai >= 2 && nilai % 2 === 0) {
                        $("#bin_m2").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#bin_m2").removeClass("bg-red").addClass("bg-default");
                    }
                }
            },
        });
    }

    function updateIconBinaanBiru(atlit_id, ronde_id) {
        $.ajax({
            type: "POST",
            url: "datahukumanskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                nilai_id: 6
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }

                    if (nilai >= 1) {
                        $("#bin_b1").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#bin_b1").removeClass("bg-red").addClass("bg-default");
                    }

                    if (nilai >= 2 && nilai % 2 === 0) {
                        $("#bin_b2").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#bin_b2").removeClass("bg-red").addClass("bg-default");
                    }
                }
            },
        });
    }

    function updateIconTeguranMerah(atlit_id, ronde_id) {
        $.ajax({
            type: "POST",
            url: "datahukumanskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                nilai_id: 5
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }

                    if (nilai >= 1) {
                        $("#teg_m1").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#teg_m1").removeClass("bg-red").addClass("bg-default");
                    }

                    if (nilai >= 2 && nilai % 2 === 0) {
                        $("#teg_m2").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#teg_m2").removeClass("bg-red").addClass("bg-default");
                    }
                }
            },
        });
    }

    function updateIconTeguranBiru(atlit_id, ronde_id) {
        $.ajax({
            type: "POST",
            url: "datahukumanskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                nilai_id: 5
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }

                    if (nilai >= 1) {
                        $("#teg_b1").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#teg_b1").removeClass("bg-red").addClass("bg-default");
                    }

                    if (nilai >= 2 && nilai % 2 === 0) {
                        $("#teg_b2").removeClass("bg-green").addClass("bg-red");
                    } else {
                        $("#teg_b2").removeClass("bg-red").addClass("bg-default");
                    }
                }
            },
        });
    }

    function updateIconPeringatanMerah(atlit_id, partai_id) {
        $.ajax({
            type: "POST",
            url: "dataperingatanskor",
            data: {
                partai_id: partai_id,
                atlit_id: atlit_id,
                nilai_id: 4
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }
                    
                    console.log(nilai)
                    if (nilai >= 1) {
                        $("#per_m1").removeClass("bg-green").addClass("bg-red");
                        // $("#per_m1").attr("status", "on");
                    } else {
                        $("#per_m1").removeClass("bg-red").addClass("bg-default");
                        // if ($("#per_m1").hasAttr("status")) {
                        //     $("#per_m1").removeAttr("status");
                        // }
                    }

                    if (nilai >= 2) {
                        $("#per_m2").removeClass("bg-green").addClass("bg-red");
                        // $("#per_m2").attr("status", "on");
                    } else {
                        $("#per_m2").removeClass("bg-red").addClass("bg-default");
                        // $("#per_m2").removeAttr("status").attr("status", "off");
                    }

                    if (nilai >= 3 && nilai % 3 === 0) {
                        $("#per_m3").removeClass("bg-green").addClass("bg-red");
                        // $("#per_m3").attr("status", "on");
                    } else {
                        $("#per_m3").removeClass("bg-red").addClass("bg-default");
                        // $("#per_m3").removeAttr("status").attr("status", "off");
                    }
                }
            },
        });
    }

    function updateIconPeringatanBiru(atlit_id, partai_id) {
        $.ajax({
            type: "POST",
            url: "dataperingatanskor",
            data: {
                partai_id: partai_id,
                atlit_id: atlit_id,
                nilai_id: 4
            },
            dataType: "json",
            success: function (data) {
                let i;
                for (i = 0; i < data.length; i++) {
                    let nilai = 0; // Inisialisasi nilai di luar perulangan
                    if (data.length > 0) {
                        nilai = data[0].nilai; // Ambil nilai hanya jika ada data
                    }

                    if (nilai >= 1) {
                        $("#per_b1").removeClass("bg-green").addClass("bg-red");
                        // $("#per_b1").attr("status", "on");
                    } else {
                        $("#per_b1").removeClass("bg-red").addClass("bg-default");
                        // $("#per_b1").removeAttr("status").attr("status", "off");
                    }

                    if (nilai >= 2) {
                        $("#per_b2").removeClass("bg-green").addClass("bg-red");
                        // $("#per_b2").attr("status", "on");
                    } else {
                        $("#per_b2").removeClass("bg-red").addClass("bg-default");
                        // $("#per_b2").removeAttr("status").attr("status", "off");
                    }

                    if (nilai >= 3 && nilai % 3 === 0) {
                        $("#per_b3").removeClass("bg-green").addClass("bg-red");
                        // $("#per_b3").attr("status", "on");
                    } else {
                        $("#per_b3").removeClass("bg-red").addClass("bg-default");
                        // $("#per_b3").removeAttr("status").attr("status", "off");
                    }
                }
            },
        });
    }

    function getNilaiMerah(atlit_id, ronde_id, partai_id) {
        $.ajax({
            type: "POST",
            url: "datatotalskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                partai_id: partai_id
            },
            dataType: "json",
            success: function (data) {
                let nilai = data.nilai; // Mengambil nilai dari properti 'nilai' dalam objek
                // let status1 = $("#per_m1").attr("status");
                // let status2 = $("#per_m2").attr("status");
                // let status3 = $("#per_m3").attr("status");
                // if (status1 == "on") {
                //     $("#nilaiMerah").text(nilai - 5);
                // } else if (status2 == "on"){
                //     $("#nilaiMerah").text(nilai - 10);
                //     console.log(15)
                // } else if (status3 == "on") {
                //     $("#nilaiMerah").text(nilai - 15);
                // } else {
                //     $("#nilaiMerah").text(nilai);
                // }   
                $("#nilaiMerah").text(nilai);
            },
        });
    }

    function getNilaiBiru(atlit_id, ronde_id, partai_id) {
        $.ajax({
            type: "POST",
            url: "datatotalskor",
            data: {
                ronde_id: ronde_id,
                atlit_id: atlit_id,
                partai_id: partai_id
            },
            dataType: "json",
            success: function (data) {
                let nilai = data.nilai; // Mengambil nilai dari properti 'nilai' dalam objek
                $("#nilaiBiru").text(nilai);
            },
        });
    }

    function getTombolJuri(){
        $.ajax({
            type: "GET",
            url: "datatomboljuriskor",
            dataType: "json",
            success: function (data) {
                var i;
                for (i = 0; i < data.length; i++) {
                    var tombolId = data[i].tombol;
                    var tombolStatus = data[i].status;

                    if (tombolStatus === 'on') {
                        $("#" + tombolId).addClass("bg-olive"); // Menambahkan kelas untuk warna
                    } else {
                        $("#" + tombolId).removeClass("bg-olive"); // Menghapus kelas untuk warna
                    }
                }
            },
        });
    }
});
