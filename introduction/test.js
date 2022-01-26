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

// let idn = 'reyhan'
// function pengenal() {
//     console.log(idn)
//     idn = 'alif'
//     console.log(idn)

//     if(true){
//         let siswa = 'john doe'
//         console.log(siswa)
//     } 
// }
// pengenal()

//variable const

/**
 * sifatnya immutable atau tidak bisa diubah setelah di deklarasikan
 * memiliki 3 scope global scope, local scope, block scope
 */

// const web = 'cahkoding'
// console.log(web)

// Tipe data javascript

/**
 * tipe data di javaScript itu ada 7
 * - null
 * - undefined
 * - boolean
 * - number
 * - bigInt
 * - string
 * - symbol 
 * js merupakan salah satu loosely typed language (variable tidak terikat dengan
 * tipe data tertentu). namun, nilai dari variable yang memiliki tipe data
 * tertentu
 * 
 * example : 
 */

// let name 
// name = 'John Doe'
// name = 17

// pengecekan tipe data
/**
 * untuk pengecekan tipe data bisa menggunakan operator typeof :
 * example :
 */

// let name 
// console.log(typeof name)



// name = 'John Doe'
// console.log(typeof name)


// Undifined
/**
 * undifined merupakan tipe data primitive yang nilainya undifined atau tidak terdefiknisikan.
 * ini merupakan tipe data default untuk variable yang tidak ada nilai
 * 
 */

// let name
// console.log(name)

// null
/**
 * ti[e data nul adalah tipe data primitif yang nilainya null. bedanya hanya di letaknya
 * saja dengan undifined.
 */

// let obj = null
// console.log(typeof obj)

// Number
/**
 * Tipe data yang mewakili angka, biasanya bilangan bulat, floating atau desimal
 * 
 * example :
 */

let num = 100
let min = -100
let des = 10.2

// NaN (Not a Number)
/**
 * NaN (NOt a Number) merupakan nilai numeric spesial. dia memberitahu bahwa nilai 
 * dari variable tersebut merupakan invalid number atau bukan termasuk angka.
 * 
 * example :
 */

// console.log('c'/2)

/**
 * keunikan dari nilai NaN :
 * 1. operator matematika yang menghasilkan NaN
 * 2. Operasi perbandingan tidak dapat dilakukan pada nilai yang akan menghasilakan false
 * 
 * contoh :
 */

// console.log(100.0/100)
// console.log(NaN/NaN)

// console.log(100 === 100.0)
// console.log(NaN == NaN)

// String
/**
 * tipe data string merupakan salah satu tipe data yang berhubungan dengan karakter
 * cirinya menggunakan '' atau petik dua ""
 * example :
 */

// let nama = 'John Doe'
// console.log(nama)

// menghitung karakter
// let kata = 'john'
// console.log(kata.length)

// looping
let word = "hello"
for (let i = 0; i < word.length; i++){
    console.log(word[i])
}
console.log('jumlahnya '+ word.length)

// Boolean

// let belajar = true
// if(belajar){
//     console.log('10 RPL B sedang belajar WEBDBMS')
// }

// Object 
/**
 * Tipe data object merupakan tipe data kompleks yang teridiri dari properti
 * (props), setiap properti berisi pasangan key: value.
 * 
 * example :
 */

// object kosong
// let emptyObject = {}

// let identitas = {
//     id : 1,
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 17
// }

// let biodata = {
//     firstName : 'reyhan',
//     lastName : 'akbar',
//     email : 'reyhanakbar@test.com',
//     phone : '(021)-123-4555',
//     address : {
//         city: 'jonggol',
//         state : 'Jawa Barat',
//         country : 'Indonesia'
//     }
// }
// console.log(biodata.firstName)
// console.log(biodata.address.country)
// console.log(biodata['address']['state'])

// Template Literal

// const firstName = "Reyhan"
// const lastName = "Akbar"
// console.log('Hello kawan'+ firstName + ' ' + lastName + ', Dia kelas 10 RPL B')
// console.log(`Hello ${firstName} ${lastName}, Kelas 10 RPL B`)

// Shorthand Property Names

// cara biasa
// let a = 1
// let b = 2
// let c = 3

// cara singkat
// let a = 1, b =2, c =4

// shorthand property names
// let [a,b,c] = ['ayam', 'bebek', 'angsa']

// console.log(`${a}, ${b}, ${c}`)













