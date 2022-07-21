// Create element:
const para = document.createElement("div");
para.innerHTML = "This new div";
para.setAttribute("class", "democlass")
para.setAttribute("id", "add006addbar")
document.getElementById("006addbar").appendChild(para);
const para1 = document.createElement("div");
para1.innerHTML = "This new div";
para1.setAttribute("class", "democlass")
para.appendChild(para1);

/*
<div class="col-md-6">
  <div class="skill mb-4">
      <div class="d-flex justify-content-between">
          <h6 class="font-weight-bold">HTML</h6>
          <h6 class="font-weight-bold">95%</h6>
      </div>
      <div class="progress">
          <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  </div>
  // ============= bagian ini akan looping
  // <div class="skill mb-4">
  //     <div class="d-flex justify-content-between">
  //         <h6 class="font-weight-bold">CSS</h6>
  //         <h6 class="font-weight-bold">85%</h6>
  //     </div>
  //     <div class="progress">
  //         <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
  //     </div>
  // </div>
  // <div class="skill mb-4">
  //     <div class="d-flex justify-content-between">
  //         <h6 class="font-weight-bold">PHP</h6>
  //         <h6 class="font-weight-bold">90%</h6>
  //     </div>
  //     <div class="progress">
  //         <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
  //     </div>
  // </div>
  // =============== looping sampai sini
</div>
*/

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
console.log(workoutChooses(pilih, workout));

