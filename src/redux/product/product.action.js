let INCR="INCR"
let DECR="DECR"
let incraction=()=>{
  return{type:INCR}
}
let decraction=()=>{
return{type:DECR}
}
export {incraction,decraction,INCR,DECR}