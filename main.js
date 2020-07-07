/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function(nums){
  let result = []
  
  for(const num of nums){
    if(num % 2 !== 0){
      result.push(num)
    }
  }
  
  return result 
  
}

const onlyEvens = function(nums){
  let result = []
  
  for(const num of nums){
    if(num % 2 === 0){
      result.push(num)
    }
  }
  
  return result 
  
}

const shortNamesOnly = function(names){
  const result = []
  
  for(name of names){
    
    if(name.length < 7){
     result.push(name)
    }
  }
  
  return result
}


const dNames = function(names){
  const result = []

  for(name of names){

    if(name.slice(0, 1) === 'd' || name.slice(0, 1) === 'D'){
      result.push(name)
    }
  }
   return result
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
