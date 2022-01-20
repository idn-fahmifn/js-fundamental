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

var a = 'sepeda'
const z = 'becak'
function kendaraan() {
    console.log(a)
    if(true){
        console.log(z)
        var x = 'baju' // saya menggunakan var agar  bisa dibaca oleh function kendaraan
        console.log(x) 
    }
}


function mobil() {
    console.log(t)
}
kendaraan()




