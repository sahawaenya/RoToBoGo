function totalDayAndCalorie (gender, target) {

  let howLong = target*7

  let output = {
    'Days of Diet': howLong
  }
  
  if(gender === 'woman') {
    output['Total Calorie per Day'] = 1500
  }
  else if(gender === 'man') {
    output['Total Calorie per Day'] = 2000
  }

  return output

}

console.log(totalDayAndCalorie('man', 4))

function foodRecommendation (gender, target) {

  const dataKalori = {
    Makanan : [
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
    ],
    Minuman : [
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
    ],
    PencuciMulut : [
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
  }

  let total =  totalDayAndCalorie (gender, target)

  for(let i = 0; i < totalDayAndCalorie['Days of Diet']; i++) {
    
  }
}