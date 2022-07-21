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

const bmi = calculateBmi(173, 50)
let message = null
let desc = null

if (bmi <= 18.4) {
    message = `BMI Anda adalah ${bmi} Anda kurang berat badan`
    desc = `kurus`
} else if (bmi >= 18.5 && bmi <= 24.9) {
    message = `BMI Anda adalah ${bmi} BMI Anda termasuk normal`
    desc = `normal`
} else if (bmi >= 25 && bmi <= 29.9) {
    message = `BMI Anda adalah ${bmi} Anda tergolong gemuk`
    desc = `gemuk`
} else if (bmi >= 30) {
    message = `BMI Anda adalah ${bmi} Anda obesitas`
    desc = `obes`
}

if (desc === 'kurus') {
    document.getElementById('005kurus').style.fontWeight = "bold"
    document.getElementById("005wise").innerText = 'Hai Kamu! Jangan bersedih, setiap sesuatu yang besar berawal dari yang kecil. Tingkatkan terus dan jaga pola makan, serta makan makanan yang sehat agar berat badanmu segera menuju ideal yaa'
} else if (desc === 'normal') {
    document.getElementById('005normal').style.fontWeight = "bold"
    document.getElementById("005wise").innerText = 'Selamat! berat badanmu ideal! jaga selalu kesehatan tubuhmu dengan menjaga pola makan dan rajin berolahraga'
} else if (desc === 'gemuk') {
    document.getElementById('005gemuk').style.fontWeight = "bold"
    document.getElementById("005wise").innerText = 'Hai Kamu! Jangan bersedih, kamu hanya perlu sedikit berusaha agar berat badanmu berkurang. Rajin berolahraga dan jaga pola makan yaa'
} else if (desc === 'obes') {
    document.getElementById('005obes').style.fontWeight = "bold"
    document.getElementById("005wise").innerText = 'Hai Kamu! Jangan bersedih, kamu tidak sendiri kok. Mari kita perbaiki bersama-sama dengan dimulai dari kebiasaan hidup sehat yaa'
}


document.getElementById("005result").innerText = bmi
document.getElementById("005message").innerText = message