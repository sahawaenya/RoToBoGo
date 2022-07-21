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
/*
*
[
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
  ]
*/


