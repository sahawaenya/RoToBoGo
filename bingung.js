function totalDayAndCalorie (gender, target) {

  let howLong = target*7

  let output = {
    'Days of Diet': howLong
  }
  let totalCal = 0
  if(gender === 'female') {
    totalCal = 1500
    output['Total Calorie per Day'] = totalCal
  }
  else if(gender === 'male') {
    totalCal = 2000
    output['Total Calorie per Day'] = totalCal
  }
  output.calPagi = totalCal * 0.3
  output.calSiang = totalCal * 0.4
  output.calMalam = totalCal * 0.3

  return output

}

console.log(totalDayAndCalorie('male', 4))

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
    ['Pudding', 120],
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


function foodRecommendation (gender, target, makanan, minuman, pencuciMulut) {

  let result = []

  let total =  totalDayAndCalorie (gender, target)
  let calPagi = total.calPagi
  let calSiang = total.calSiang
  let calMalam = total.calMalam
  let filter = filterSisaKalori (sisaKalori, item)

  let flag = true
  while(flag === true) {
    let makan = filterSisaKalori()
  }
  

  let calorie1 = Math.round(total['Total Calorie per Day']/3)

  

  // let choose = Math.floor(Math.random()*makanan.length)
  // console.log(choose)
  // kaloriMakanan = dataKalori.Makanan[choose][1]

  // calorie1 -= kaloriMakanan
  // console.log((calorie1))
  
  
}

// console.log(foodRecommendation('man', 4))
// console.log(foodRecommendation('male', 1, Makanan, Minuman, PencuciMulut))

function filterSisaKalori (sisaKalori, item) {
  let result = []
  for(let i = 0; i < item.length; i++){
    if(item[i][1] <= sisaKalori) {
      result.push(item[i])
    }
  }
  let choose = Math.floor(Math.random()*makanan.length)
  return result
}
console.log(filterSisaKalori(200, Makanan))