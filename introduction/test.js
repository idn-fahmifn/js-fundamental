// Dasar syntax dari javaScript

//  Penulisan Komentar
// komentar satu 

/**
 * ini komentar
 * untuk
 * lebih dari 
 * satu baris
 */

// penulisan identifier 
// var kelasSaya
// var kelas_saya
// var kelas$saya
// var kelas

// statement
/**
 * statement atau pernyataan js yang paling dasar.
 * statement cirinya diakhiri oleh semicolon atau titik koma, namun sekarang tidak perlu
 * statement memiliki tugas tertentu
 */

// let nama = 'John Doe' //pendeklarasian variable
// let nama1 = 'Johan' //pendeklarasian variable
// console.log(nama)
// console.log(nama1)

// expression

// expression itu adalah kode js untuk menghasilkan nilai tertentu.

// let a = 10
// let b = 20
// let c = a * b //statement yang berisi expression / meghasilkan sebuah nilai
// console.log(c)

// global scope
/**
 * nilai bisa diakses oleh semua function
 */
 
// let a = 1

// function tiga() {
//     a = 3
//     console.log(a)
// }
//  function empat(){
//      a = 4
//      console.log(a)
//  }
// tiga()
// empat()

// block scope

// function hello() {
//     if(true){
//         let salam = 'assalamualaikum guisss'
//         console.log(salam)
//     }
//     console.log(salam)
// }
// hello()

// closure

// function hello(nama, julukan){
//     var a = 'hello,'+nama+' '+julukan // nama adalah nama dari parameter
//     return function () {
//         console.log(a)
//     }
// }
// var john = hello("Ahmad", "Si raja tidur")
// john()

// challanges :
/**
 * nama : nama kalian
 * kelas : rpl B
 */

// Variable 

/**
 * keyword variable yang ada di javascript yaitu :
 * var let const
 */

// Variable var 
/**
 * bersifat mutable artinya bisa merubah value atau nilainya
 * memiliki dua function scope yaitu global scope dan local function scope
 */

// var a = 'pagi saya sudah makan'

// a = 'saya belum makan'
// console.log(a)

// contoh scope var 

// var web = 'cahkoding.com'
// function website() {
//     console.log(web)
//     if(true){
//         var tagline = "belajar koding untuk semua"
//     }
//     console.log(tagline)
// }
// website()

// let buah = 'apel'
// buah = 'mangga'
// console.log(buah)

// contoh scope let
/**
 * - global scope
 * - local scope
 * - block scope
 */

let idn = 'reyhan'
function pengenal() {
    console.log(idn)
    idn = 'alif'
    console.log(idn)

    if(true){
        let siswa = 'john doe'
        console.log(siswa)
    } 
}
pengenal()

//variable const

/**
 * sifatnya immutable atau tidak bisa diubah setelah di deklarasikan
 * memiliki 3 scope global scope, local scope, block scope
 */

// const web = 'cahkoding'
// console.log(web)


/**
 * s.id/absensi-web
 */




