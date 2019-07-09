
//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(nomor,nama,ttl,hobby) {
    for(var i = 0; i < 4; i++ ) {
    console.log('Nomor ID: ' + input[i][0]);
    console.log('Nama Lengkap: ' + input[i][1]);
    console.log('TTL: ' + input[i][2]);
    console.log('Hobi: ' + input[i][3] + '\n');
    }
}

dataHandling();

/* Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca 
*/