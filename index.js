// Code your solution in this file!
const returnFirstTwoDrivers=function(array){
  return array.slice(0,2) }
  
  const returnLastTwoDrivers=function(array){
    return array.slice(-2)
  }
  
  let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
  
  const createFareMultiplier=function (number){
    return function(fare){
      
    
    return number*fare
  }
  }
  const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);

function selectDifferentDrivers(drivers,selector){
   if(selector == returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
  }
  else{
     return returnLastTwoDrivers(drivers);
  }

}
