
import userData from "./userData.js"
console.log(userData);

userData.map(function (value,index){
        console.log(`${value.title} \n ${value.description}`)
})

