

const returnFirstTwoDrivers = function(list) {
      const firstTwoDrivers = list.slice(0, 2);
      return firstTwoDrivers;
}

const returnLastTwoDrivers = function(list) {
      const lastTwoDrivers = list.slice(list.length - 2);
      return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(variable) {
    return function(value) {
        const fareMultiplier = value * variable;
        return fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(list, functionName) {
    return functionName(list);
    
}
    

// Code your solution in this file!
