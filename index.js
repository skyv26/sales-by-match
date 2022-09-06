let n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  // Write your code here
  let newObj = {};
  let arrr = [];
  let count = 0;
  ar.forEach((elem) => {
      newObj[elem]=0;
  })

  ar.forEach((elem) => {
      if(newObj.hasOwnProperty(elem)){
          newObj[elem]+=1;
      }
  })
  
  Object.values(newObj).forEach( (elem) => {
      if(elem > 1) {
          count+=Math.floor(elem/2);
      }
  })
  
  return count;

}


console.log(sockMerchant(n, ar))

// Time Complexity: n + m + o
// Space Complexity: n