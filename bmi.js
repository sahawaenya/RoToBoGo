/**
 * 
 * RUMUS BMI = berat badan / (tinggi badan(m))^2
 * 
 * jika bmi <= 18.4 -> underweight
 * jika bmi >= 18.5 && bmi <= 24.9 -> normal
 * jika bmi >= 25 && bmi <= 29.9 -> overweight
 * jika bmi >= 30 -> obese
 */

/**
    // ALGORITMA
    1. input tinggi dalam satuan centimeter dan berat badan dalam satuan kg
    2. kalkulasi bmi dengan rumus diatas
    3. tampilkan keterangan BMI apakah underweight, normal, overweight, atau obesitas

 */

/**
 * // pre-requisites
 *  1. input harus berupa number => bisa diakali di html nya
 *  2. jika ada salah satu data atau keduanya tidak di input atau input angka 0 maka tampilkan alert 'please fill the form'
 *  3. jika input merupakan angka minus maka tampilkan alert 'negative value is not allowed'
 */

// ------------------------------------------------------------------------------------------------------------------------------
// === input ===

// let weight = document.getElementById("weight").value
// let height = document.getElementById("height").value


// === function ===

function calculateBmi(height, weight) {

    let result = 0
    height /= 100
    result = weight / Math.pow(height, 2)

    return result.toFixed(1)
}

// console.log(calculateBmi(173, 83));

// == dom ==

const bmi = calculateBmi(height, weight)
let message = null

if (bmi <= 18.4) {
    message = `Your Body Mass Index (BMI) is ${bmi}. You are UNDERWEIGHT`
} else if (bmi >= 18.5 && bmi <= 24.9) {
    message = `Your Body Mass Index (BMI) is ${bmi}. You are NORMAL`
} else if (bmi >= 25 && bmi <= 29.9) {
    message = `Your Body Mass Index (BMI) is ${bmi}. You are OVERWEIGHT`
} else if (bmi >= 30) {
    message = `Your Body Mass Index (BMI) is ${bmi}. You are OBESE`
}


// document.getElementById("results").innerHTML = message