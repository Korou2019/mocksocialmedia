


const ADJECTIVES=[
      'sincere',
      'sleepy',
      'purple',
      'electronic',
      'slim',
      'dangerous',
      'old'
]


const OBJECTS=[
      'knife',
      'television',
      'pen',
      'sailboat',
      'cat',
      'spoon',
      'glass'
]


function getRandomUsername(){
        const adj=ADJECTIVES[Math.floor(Math.random() * 7)]
        const obj=OBJECTS[Math.floor(Math.random() * 7)]
        return `${adj}-${obj}`    
}


module.exports={
      getRandomUsername
}




/*
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
console.log(getRandomUsername())
*/


