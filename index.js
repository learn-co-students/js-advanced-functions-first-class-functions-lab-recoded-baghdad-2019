// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  return [arr[0], arr[1]];
}
const returnLastTwoDrivers = function (arr){
  return [arr[arr.length-2],arr[arr.length-1]];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(int){
  return function(fare){
    return fare*int;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers=function(arr,select){
  return select(arr);
}
