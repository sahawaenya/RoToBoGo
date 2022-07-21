const Makanan = [
  ['Steak', 270, 'RoToBoGo\img\makanan\Steak.png'],
  ['Mashed Potato', 88, 'RoToBoGo\img\makanan\MashedPotato.jpg'],
  ['Nasi Goreng', 163, 'RoToBoGo\img\makanan\NasiGoreng.jpeg'],
  ['Jagung Rebus', 35, 'RoToBoGo\img\makanan\JagungRebus.jpg'],
  ['Telur Dadar', 153, 'RoToBoGo\img\makanan\TelurDadar.jpg'],
  ['Ayam Goreng', 246, 'RoToBoGo\img\makanan\AyamGoreng.jpg'],
  ['Nasi Soto', 395, 'RoToBoGo\img\makanan\NasiSoto.jpg'],
  ['Kimbab', 145, 'RoToBoGo\img\makanan\Kimbab.png'],
  ['Kangkung Tumis', 450, 'RoToBoGo\img\makanan\KangkungTumis.jpg'],
  ['Mie Instan', 200, 'RoToBoGo\img\makanan\MieInstan.jpg'],
  ['Onigiri', 203, 'RoToBoGo\img\makanan\Onigiri.jpg'],
  ['Bakso', 197, 'RoToBoGo\img\makanan\Bakso.jpg'],
  ['Burger', 295, 'RoToBoGo\img\makanan\Burger.jpeg'],
  ['Sate Kambing', 211, 'RoToBoGo\img\makanan\SateKambing.jpg'],
  ['Omelette', 154, 'RoToBoGo\img\makanan\Omelette.jpg']
]

const Minuman = [
  ['Jus Mangga', 100, 'RoToBoGo\img\minuman\JusMangga.jpg'],
  ['Milk Shake', 112, 'RoToBoGo\img\minuman\MilkShake.jpg'],
  ['Coca Cola', 38, 'RoToBoGo\img\minuman\CocaCola.jpg'],
  ['Jus Nanas', 60, 'RoToBoGo\img\minuman\JusNanas.jpeg'],
  ['Boba Milk Tea', 512, 'RoToBoGo\img\minuman\BobaMilkTea.jpg'],
  ['Es Teh', 35, 'RoToBoGo\img\minuman\EsTeh.jpg'],
  ['Sprite', 39, 'RoToBoGo\img\minuman\Sprite.jpg'],
  ['Susu Kedelai', 54, 'RoToBoGo\img\minuman\SusuKedelai.jpg'],
  ['Jus Wortel', 39, 'RoToBoGo\img\minuman\JusWortel.jpg'],
  ['Kopi Hitam', 2, 'RoToBoGo\img\minuman\KopiHitam.jpg'],
  ['Jus Alpukat', 294, 'RoToBoGo\img\minuman\JusAlpukat.jpeg'],
  ['Es Marjan', 130, 'RoToBoGo\img\minuman\EsMarjan.jpg'],
  ['Pocari Sweat', 70, 'RoToBoGo\img\minuman\PocariSweat.jpg'],
  ['Susu Milo', 220, 'RoToBoGo\img\minuman\SusuMilo.jpg'],
  ['Jus Sirsak', 65, 'RoToBoGo\img\minuman\JusSirsak.jpeg']
]

const PencuciMulut = [
  ['Pudding', 120, 'RoToBoGo\img\cuci\Pudding.jpg'],
  ['Popcorn', 375, 'RoToBoGo\img\cuci\Popcorn.jpg'],
  ['Brownies', 466, 'RoToBoGo\img\cuci\Brownies.jpg'],
  ['Keripik Kentang', 536, 'RoToBoGo\img\cuci\KeripikKentang.jpg'],
  ['Es Krim', 208, 'RoToBoGo\img\cuci\EsKrim.jpg'],
  ['Es Buah', 120, 'RoToBoGo\img\cuci\EsBuah.jpg'],
  ['Cookies', 501, 'RoToBoGo\img\cuci\Cookies.jpg'],
  ['Donat', 452, 'RoToBoGo\img\cuci\Donat.jpg'],
  ['Croissant', 406, 'RoToBoGo\img\cuci\Croissant.jpeg'],
  ['Waffle', 291, 'RoToBoGo\img\cuci\Waffle.jpg'],
  ['Bolu', 257, 'RoToBoGo\img\cuci\Bolu.jpg'],
  ['Keripik Singkong', 220, 'RoToBoGo\img\cuci\KeripikSingkong.jpg'],
  ['Bakwan', 137, 'RoToBoGo\img\cuci\Bakwan.jpg'],
  ['Cakwe', 200, 'RoToBoGo\img\cuci\Cakwe.jpg'],
  ['Pisang Rebus', 105, 'RoToBoGo\img\cuci\PisangRebus.jpg']
]

function totalDayAndCalorie (gender) {

  let totalCal = 0

  let output = {}
  
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

function chooseMakanan (gender, target, makanan, minuman, pencuciMulut) {
  let total =  totalDayAndCalorie (gender)
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
// console.log(chooseMakanan('male', 2, Makanan, Minuman, PencuciMulut))

function checkReq(target, weight, height){
  let minWeight = Math.ceil(18.5 * Math.pow((height/100), 2))
  // console.log(minWeight)
  if ( (weight - target) < minWeight){
    return [false, minWeight]
  }else{
    return [true, minWeight]
  }
}

console.log(checkReq(17, 70, 170))