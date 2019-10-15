// Code your solution in this file!
let firstTwo=[]
const returnFirstTwoDrivers=function (array){
  let arrays=[]
  arrays[0]=array[0]
  arrays[1]=array[1]
  firstTwo=arrays
  return arrays
}

const returnLastTwoDrivers=function (array){
  let arrays=[]
  let length=array.length;
    arrays[0]=array[length-2]
  arrays[1]=array[length-1]
  return arrays
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(x){
  return function(y){
    return x*y
  }
  
}

function fareDoubler(x){
 return x*2
}

function fareTripler(x){
 return x*3
}

function selectDifferentDrivers(array,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(array);
}