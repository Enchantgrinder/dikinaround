alert ('selamat datang');
//variabel untuk operand angka
var angka1 = 23;
var angka2 = 32;
var angkawhile = 1;
var angkawhile2 = 1;

var b = confirm('OK untuk tambah BATAL untuk kurang');

if(b===true) {
    angka1 = prompt('silahkan memasukan angka pertama untuk ditambah');
    angka2 = prompt('silahkan memasukan angka kedua untuk ditambah');
    for (angkawhile<=angka2; angkawhile++;) {
        angka1++;
    }
    alert ('jawabannya adalah ' + angka1);
} else {
    angka1 = prompt('silahkan memasukan angka pertama untuk dikurang');
    angka2 = prompt('silahkan memasukan angka kedua untuk dikurang');
    for(angkawhile<=angka2; angkawhile++;) {
        angka1--;
    }
    alert ('jawabannya adalah ' + angka1);
}