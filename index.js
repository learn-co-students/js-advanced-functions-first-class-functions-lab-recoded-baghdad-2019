// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]]
  }
  
  const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]]
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  const createFareMultiplier = (function(times){
    return function(fare){return fare * times;}
  }) ;
  
//   const fareDoubler = createFareMultiplier(2);
//   const fareTripler = createFareMultiplier(3);


  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);
    
  function selectDifferentDrivers(arr, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arr)
  }
  