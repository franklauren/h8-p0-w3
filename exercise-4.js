function dataHandling2(input) {
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    input.splice(1,1,"Roman Alamsyah Elsharawy");
    input.splice(2,1,"Provinsi Bandar Lampung");
    input.splice(4,1,"Pria","SMA International"); //bisa langsung nambahin 2 data
    console.log(input);

//Mei
    var tanggal=input[3].split("/");
    switch(tanggal[1]) {                        
        case '01':{ console.log('January'); break; }
        case '02':{ console.log('February'); break; }
        case '03':{ console.log('Maret'); break; }
        case '04':{ console.log('April'); break; }
        case '05':{ console.log('Mei'); break; }
        case '06':{ console.log('Juni'); break; }
        case '07':{ console.log('Juli'); break; }
        case '08':{ console.log('Agustus'); break; }
        case '09':{ console.log('September'); break; }
        case '10':{ console.log('Oktober'); break; }
        case '11':{ console.log('November'); break; }
        case '12':{ console.log('Desember'); break; }
    }    
    
//["1989", "21", "05"]
    tanggal[0]=parseInt(tanggal[0]);
    tanggal[1]=parseInt(tanggal[1]);
    tanggal[2]=parseInt(tanggal[2]);
    var urutan = tanggal.sort(function(a,b){ return a<b;});
    console.log(urutan);

//21-05-1989
    console.log(input[3].split('/').join('-'));

//Roman Alamsyah
    var irisan = input[1];
    console.log(irisan.slice(0,15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
