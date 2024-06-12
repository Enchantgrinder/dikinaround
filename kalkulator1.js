function math () {
    alert ('selamat datang');
//variabel untuk operand angka
var angka1 = 23;
var angka2 = 32;
var angkawhile = 1;
var angkawhile2 = 1;


//prompt untuk menentukan operasi apa yang akan dilakukan
 var b = confirm('OK untuk tambah BATAL untuk kurang');
if (b===true) {
    angka1 = prompt('silahkan memasukan angka pertama untuk ditambah');
    angka2 = prompt('silahkan memasukan angka kedua untuk ditambah');
    while (angkawhile<=angka2){
        angka1++
        angkawhile++
     }
    alert ('jawabannya adalah ' + angka1);
    
} else {
    angka1 = prompt('silahkan memasukan angka pertama untuk dikurang');
    angka2 = prompt(angka1 + ' ingin dikurang dengan apa?');
    while (angkawhile<=angka2){
        angka1--
        angkawhile++
    }
    alert ('jawabannya adalah ' + angka1);
}
}