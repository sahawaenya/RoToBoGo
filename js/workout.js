function addBar(input){
for (let h = 0 ; h < input.length ; h += 3){
  const paren = document.createElement("div");
  // para.innerHTML = "Para";
  paren.setAttribute("class", "row align-items-center")
  document.getElementById("006addbar").appendChild(paren);
for ( let i = 0 ; i < 3 ; i++){
  let nomor = h + i
  let dataIn = input[nomor]
  if(!input[nomor]){
    continue
  }
  let numNow =  Math.floor(Math.random()*dataIn.number)
  let ranNow = Math.floor((Math.floor(numNow)/dataIn.number)*100)
  // console.log(ranNow, "ran <<<<")
    // Create element:
    // const paren = document.createElement("div");
    // // para.innerHTML = "Para";
    // paren.setAttribute("class", "row align-items-center")
    // document.getElementById("006addbar").appendChild(paren);

    const para = document.createElement("div");
    // para.innerHTML = "Para";
    paren.setAttribute("class", "col-md-6")
    paren.appendChild(para);

    const para1 = document.createElement("div");
    // para1.innerHTML = "Para1";
    para1.setAttribute("class", "skill mb-4")
    para.appendChild(para1);

    const para2 = document.createElement("div");
    // para2.innerHTML = "Para2";
    para2.setAttribute("class", "d-flex justify-content-between")
    para1.appendChild(para2);

    const head = document.createElement("h6");
    head.innerHTML = dataIn.name;
    head.setAttribute("class", "font-weight-bold")
    para2.appendChild(head);

    const head1 = document.createElement("h6");
    head1.innerHTML = `${numNow} / ${dataIn.number}`;
    head1.setAttribute("class", "font-weight-bold")
    para2.appendChild(head1);

    const para3 = document.createElement("div");
    // para3.innerHTML = "para3";
    para3.setAttribute("class", "progress")
    para1.appendChild(para3);

    const para4 = document.createElement("div");
    // para4.innerHTML = "para4";
        if(i ===0){
      para4.setAttribute("class", "progress-bar bg-primary")
      }
      if(i === 1 ){
        para4.setAttribute("class", "progress-bar bg-warning")
        }
        if(i === 2){
          para4.setAttribute("class", "progress-bar bg-danger")
          }
    para4.setAttribute("role", "progressbar")
    para4.setAttribute("aria-valuenow", ranNow)
    para4.setAttribute("aria-valuemin", "0")
    para4.setAttribute("aria-valuemax", "100")
    para3.appendChild(para4);
    }
}
}



const workout = 
  {dada: [
  {
    name : "push Up",
    number : 10,
  },
  {
    name : "plank",
    number : 1,
  },
  {
    name : "chest Press",
    number : 10,
  },
  {
    name : "pull Up",
    number : 15,
  },
  {
    name : "chair Dips",
    number : 15,
  },
  ],
  perut:[
    {
      name : "sit Up",
      number : 10,
    },
    {
      name : "crunch",
      number : 10,
    },
    {
      name : "mountain Climber",
      number : 8,
    },
    {
      name : "plank",
      number : 1,
    },
    {
      name : "Bridhe",
      number : 1,
    },
  ],
  kaki : [
    {
      name : "push Up",
      number : 10,
    },
    {
      name : "squat",
      number : 10,
    },
    {
      name : "jumping Jack",
      number : 11,
    },
    {
      name : "lunge",
      number : 14,
    },
    {
      name : "sit Wall",
      number : 1,
    },
    {
      name : "burpee",
      number : 10,
    },
  ],
  lengan : [
    {
      name : "push Up",
      number : 10,
    },
    {
      name : "plank Press",
      number : 10,
    },
    {
      name : "curl Barbel",
      number : 10,
    },
    {
      name : "burpee",
      number : 10,
    },
    {
      name : "shoulder Press",
      number : 12,
    },
 ]}

let pilih = ['dada', 'kaki']
function workoutChooses(input, work) {
  let result = []
  // console.log(work[input[1]]);
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < work[input[i]].length; j++) {
   let flag = true
    if (!result.length) {
    result.push(work[input[i]][j])
    continue
   }
    for (let k = 0; k < result.length; k++) {
      if (result[k].name === work[input[i]][j].name) {
        flag = false
        break
      }
      
    }
    // console.log(work[input[i]][j]);
    if (flag){
      result.push(work[input[i]][j])
    } 
  }
  
}
  return result
  
}
addBar(workoutChooses(pilih, workout));

