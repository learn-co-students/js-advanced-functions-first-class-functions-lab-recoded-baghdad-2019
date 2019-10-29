const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers=function(){
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers=function(){
  return  drivers.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(i){
  return function(v){
    return i*v;
  };
}

const fareDoubler=function(k){return createFareMultiplier(k)(2)};

const fareTripler=function(k){return createFareMultiplier(k)(3)};

function selectDifferentDrivers(drivers,fun){
  if(fun==returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
  }else {return returnLastTwoDrivers(drivers)}
}
