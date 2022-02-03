// identifier

/**
 * identider adalah penamaan variable, fungsi ataupun parameter
 * karakter pertamanya hanya bosa huruf a-z, atau A-Z dan simbol underscore atau dollar
 * tidak boleh menggunakan angka di depan.
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

// statement
/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */
// let name = "hello world" //statement dasar/ biasa
// console.log(name)

// expression
/**
 * expression merupakan ekspressi js yang berfungsi untuk menghasilkan nilai tertentu.
 */

// let first = 1
// let second = 2
// let result = first + second

// if(result>1){
//     console.log('maka hasilnya'+result+' cm')
// }

// scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

// global scope
/**
 * global scope merupakan cakupan di seluruh file
 */

// var a = 'Hallo rekan rekan'

// function first() {
//     console.log(a)
//     if(true){
//         const b = 'hello john'
//         b = 'hello fulan'
//         console.log(b)
//     }

// }

// function second() {
//     a = 'nilainya sudah diubah'
//     console.log(a)
// }
// first()
// second()

// let a = 'mobil'
// function kendaraan() {
//     a = 'sepeda'
//     console.log(a)
//     if(true){
//         let c = 'bus'
//     }
//     console.log(c)
// }
// kendaraan()

// var a = 'sepeda'
// const z = 'becak'
// function kendaraan() {
//     console.log(a)
//     if(true){
//         console.log(z)
//         var x = 'baju' // saya menggunakan var agar  bisa dibaca oleh function kendaraan
//         console.log(x) 
//     }
// }



// closure 
/**
 * closure adalah cara mengakses variable dari parent scope di dalam child scope parent
 */

// function hello(sapa) {
//     var text = 'assalamualaikum ' +sapa
//     return function () {
//         console.log(text)
//     }
// }
// var nama = hello('fulan')
// nama()

// chalange :

/**
 * nama : nama kalian 
 * kelas : x rpl a
 */

// Tipe data pada js
/**
 * tipe data adalah karakteristrik dari nilai sebuah data, di js terdapat 
 * 7, 
 * null, undifined,boolean, number, bigInt, string dan symbol (es6).
 * dan tipe data kompleks object.
 * 
 * loosely typed yaitu variable tidak menentukan sebuah tipe data, melainkan
 * nilai yang menentukan tipe data tersebut.
 */

// let a = 'saya'
// let c = 2

// let z = null
// console.log(typeof z)

/**
 * tipe data undifined 
 * tipe data yang nilainya kosong atau tidak di definisikan.
 */

/**
 * tipe data null
 * tipe data primitif yang nilainya kosong atau null.
 */

/**
 * number
 * 
 * Rentang nilai yang bisa ditampung oleh tipe data number yakni antara -(2^53 - 1)
 *  dan 2^53 - 1 atau -9007199254740991 sampai 9007199254740991. Jika sebuah number
 *  memiliki nilai lebih dari rentang ini, maka sebaiknya menggunakan tipe data BigIn
 */

/**
 * NaN atau Not a Number
 * NaN merupakan nilai numeric yang memberitahu bahwa nilainya itu invalid number
 * atau bukan number.
 */

// let a = 17
// if (a >= 17){
//     a = 'anda belum cukup umur'
//     console.log(a - 2)
// }else{
//     a = 'sudah cukup'
//     console.log(a)
// }

/**
 * string
 * string merupakan tipe data yang menampung karakter. symbolnya '', "", ``
 * 
 */
// menghitung jumlah
// let a = 'hello'
// console.log(a.length)

// // loop
// let kata = 'helloworld'
// for (let i = 0; i < kata.length; i++){
//     console.log(kata[i])
// }

/**
 * boolean
 * sebuah tipe data yang menentukan kebenaran, dan hanya memiliki 2 nilai 
 * yaitu true and false
 */

// let belajar = true
// if(belajar){
//     console.log('Kelas ini sedang belajar')
// }

/**
 * Object
 * object merupakan tipe data komplek yang berisi props (properti).
 */

let identitas = {
    firstName: 'Dias',
    lastName: 'Utsman',
    socialMedia: {
        email: 'dias@test.com',
        instagram: 'utssrr',
        linkedind: 'diasutsman',
    },
    phone: '(021) 123 4567',
    address: {
        city: 'bekasi',
        number: '17',
        street: 'jalan bahagia'
    }
}

// cara memanggil object

// menggunakan titik

// console.log('nama saya : ' + identitas.firstName)
// console.log('saya tinggal di ' + identitas.address.city)

// menggunakan array
// console.log(identitas['firstName'] + identitas['lastName'])
// console.log(identitas['address']['number'])

// console.table(identitas)

// template literal

// const mobil = 'peugeot'
// const motor = 'ninja'
// console.log('mobil saya adalah '+mobil+' dan motor saya adalah '+ motor)
// console.log(`saya punya mobil ${mobil} dan motor ${motor}`)

// loosely typed language


// shorthand named property
// let [a,b,c] = [true,4,5]

// ternarary operator
let a = 9
// if(a<10){
//     console.log('nilai A kurang dari 10')
// }else{
//     console.log('nilai a lebih dari 10')
// }

// ini menggunakan ternary operator
// a<10
// ? console.log('nilai a kurang dari 10')
// : console.log('nilai a lebih dari 10')


/**
 * function
 * merupakn sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali.
 */

// function biasa

// function name(params) {
//     console.log('saya belajar javaScript')
// }
// // name()

// function test(parameter, parameterb){
//     console.log(parameter, parameterb)
// }
// test('saya belajar javaScript', 'isi apa aja')

// // anonymous function

// const anon = function(fahmi){
//     console.log(fahmi)
// }
// anon('Saya Belajar javaScript')

// // arrow function

// const third = (parameter) => {
//     console.log(parameter)
// }
// third('ini adalah arrow function')

// const satu = (parameter) => {
//     let a = parameter
//     console.log(a)
// }
// // satu('ini adalah arrow function')

// const dua = function (num1, num2) {
//     let a = num1,
//         b = num2
//     console.log(a + b)
// }
// dua(15, 15)


// function printGenap(num, callback) {
//     const isTrue = callback(num)
//     if (isTrue) {
//         console.log(`${num} adalah bilangan genap`)
//     } else {
//         console.log(`${num} adalah bilangan ganjil`)
//     }
// }

// printGenap(5, function (n) {
//     return n % 2 == 0
// })


/**
 * High Order function
 * fungsi yang menerima argumen berupa fungsi lain serta return bisa berupa fungsi juga.
 */

// normal function

// function genap(number) {
//     return number % 2 == 0
// }

// function print(number) {
//     let isTrue = genap(number)
//     if (isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }
// print(10)


// High Order Function



function genap(number) {
    return number % 2 == 0
}

function print(number, fahmi) {
    let isTrue = fahmi(number)
    if (isTrue) {
        console.log(`${number} adalah bilangan genap`)
    } else {
        console.log(`${number} adalah bilangan ganjil`)
    }
}
print(10, genap)


function kecepatan(mobil) {

    return mobil >= 100
}

function warna(mobil) {
    return mobil == 'merah'
}

function kendaraan(mobil, callback) {
    let a = callback(mobil)
    if(a){
        console.log(`mobil dengan ${mobil} adalah mobil saya`)
    }else{
        console.log(`mobil dengan ${mobil} bukan mobil saya`)
    }
}

kendaraan(100, kecepatan)







