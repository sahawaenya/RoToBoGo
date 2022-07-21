const Makanan = [
  ['Steak', 270],
  ['Mashed Potato', 88],
  ['Nasi Goreng', 163],
  ['Jagung Rebus', 35],
  ['Telur Dadar', 153],
  ['Ayam Goreng', 246],
  ['Nasi Soto', 395],
  ['Kimbab', 145],
  ['Kangkung Tumis', 450],
  ['Mie Instan', 200],
  ['Onigiri', 203],
  ['Bakso', 197],
  ['Burger', 295],
  ['Sate Kambing', 211],
  ['Omelette', 154]
]

const Minuman = [
  ['Jus Mangga', 100],
  ['Milk Shake', 112],
  ['Coca Cola', 38],
  ['Jus Nanas', 60],
  ['Boba Milk Tea', 512],
  ['Es Teh', 35],
  ['Sprite', 39],
  ['Susu Kedelai', 54],
  ['Jus Wortel', 39],
  ['Kopi Hitam', 2],
  ['Jus Alpukat', 294],
  ['Es Marjan', 130],
  ['Pocari Sweat', 70],
  ['Susu Milo', 220],
  ['Jus Sirsak', 65]
]

const PencuciMulut = [
  ['Pudding', 120, 'img/cuci/pudding.jpg'],
  ['Popcorn', 375],
  ['Brownies', 466],
  ['Keripik Kentang', 536],
  ['Es Krim', 208],
  ['Es Buah', 120],
  ['Cookies', 501],
  ['Donat', 452],
  ['Croissant', 406],
  ['Waffle', 291],
  ['Bolu', 257],
  ['Keripik Singkong', 220],
  ['Bakwan', 137],
  ['Cakwe', 200],
  ['Pisang Rebus', 105]
]

function totalDayAndCalorie (gender, target) {

  let howLong = target*7
  let totalCal = 0

  let output = {
    daysOfDiet: howLong
  }
  
  if(gender === 'female') {
    totalCal = 1500
    output.calPerDay = totalCal
  }
  else if(gender === 'male') {
    totalCal = 2000
    output.calPerDay = totalCal
  }

  output.calPagi = totalCal * 0.3
  output.calSiang = totalCal * 0.4
  output.calMalam = totalCal * 0.3

  return output
}

// console.log(totalDayAndCalorie('male', 4))

function chooseMakanan (gender, target, makanan, minuman, pencuciMulut) {
  let total =  totalDayAndCalorie (gender, target)
  let output = {}
  let result = []
  
  for(let i = 0; i < target * 7; i++) {
    let calPagi = total.calPagi
    let calSiang = total.calSiang
    let calMalam = total.calMalam
    let totalCalPagi = 0
    let totalCalSiang = 0
    let totalCalMalam = 0
    let tes = {}
    output = {}
    //================================================STRAT PAGI
    let makanPagi = filterSisaKalori(calPagi, makanan)
    if(makanPagi !== undefined) {
      calPagi -= makanPagi[1]
      output.makanPagi = makanPagi[0]
      output.calMaPagi = makanPagi[1]
      output.imgMaPagi = makanPagi[2]
      totalCalPagi += makanPagi[1]
    }

    let minumPagi = filterSisaKalori(calPagi, minuman)
    if(minumPagi !== undefined) {
      output.minumPagi = minumPagi[0]
      output.calMiPagi = minumPagi[1]
      output.imgMiSiang = minumPagi[2]
      calPagi -= minumPagi[1]
      totalCalPagi += minumPagi[1]
    }

    let desertPagi = filterSisaKalori(calPagi, pencuciMulut)
    if(desertPagi !== undefined) {
      output.desertPagi = desertPagi[0]
      output.calDePagi = desertPagi[1]
      output.imgDeMalam = desertPagi[2]
      calPagi -= desertPagi[1]
      totalCalPagi += desertPagi[1]
    }
    output.calPagi = totalCalPagi
    //==============================================END PAGI
    //================================================STRAT Siang
    let makanSiang = filterSisaKalori(calSiang, makanan)
    if(makanSiang !== undefined) {
      calSiang -= makanSiang[1]
      output.makanSiang = makanSiang[0]
      output.calMaSiang = makanSiang[1]
      output.imgMaSiang = makanSiang[2]
      totalCalSiang += makanSiang[1]
    }

    let minumSiang = filterSisaKalori(calSiang, minuman)
    if(minumSiang !== undefined) {
      output.minumSiang = minumSiang[0]
      output.calMiSiang = minumSiang[1]
      output.imgMiSiang = minumSiang[2]
      calSiang -= minumSiang[1]
      totalCalSiang += minumSiang[1]
    }

    let desertSiang = filterSisaKalori(calSiang, pencuciMulut)
    if(desertSiang !== undefined) {
      output.desertSiang = desertSiang[0]
      output.calDeSiang = desertSiang[1]
      output.imgDeMalam = desertSiang[2]
      calSiang -= desertSiang[1]
      totalCalSiang += desertSiang[1]
    }
    output.calSiang = totalCalSiang
    //==============================================END Siang
    //================================================STRAT Malam
    let makanMalam = filterSisaKalori(calMalam, makanan)
    if(makanMalam !== undefined) {
      calMalam -= makanMalam[1]
      output.makanMalam = makanMalam[0]
      output.calMaMalam = makanMalam[1]
      output.imgMaMalam = makanMalam[2]
      totalCalMalam += makanMalam[1]
    }

    let minumMalam = filterSisaKalori(calMalam, minuman)
    if(minumMalam !== undefined) {
      output.minumMalam = minumMalam[0]
      output.calMiMalam = minumMalam[1]
      output.imgMiSiang = minumMalam[2]
      calMalam -= minumMalam[1]
      totalCalMalam += minumMalam[1]
    }

    let desertMalam = filterSisaKalori(calMalam, pencuciMulut)
    if(desertMalam !== undefined) {
      output.desertMalam = desertMalam[0]
      output.calDeMalam = desertMalam[1]
      output.imgDeMalam = desertMalam[2]
      calMalam -= desertMalam[1]
      totalCalMalam += desertMalam[1]
    }
    output.calMalam = totalCalMalam
    //==============================================END Malam
  
    tes[i+1] = output
    result.push(tes)
    
  }

  return result
}
console.log(chooseMakanan('male', 2, Makanan, Minuman, PencuciMulut))

function filterSisaKalori (sisaKalori, item) {
  let result = []
  for(let i = 0; i < item.length; i++){
    if(item[i][1] <= sisaKalori) {
      result.push(item[i])
    }
  }
  let choose = Math.floor(Math.random()*result.length)
  result = result[choose]
  return result
}
// console.log(filterSisaKalori(2, Minuman))