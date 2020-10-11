// pseudocode
// compare two arrays and only extract the one that's NOT in BOTH array and push to the empty array. 

// find the one that's NOT in the array by comparing two arrays 

////add two arrays and get rid of the ALL the duplicated ones. 


//compare two arrays and push the ones that have different values;


//https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript


// CODE*******************************
function diffArray(arr1, arr2) {
  let difference = arr1
                 .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
  return difference
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))



// *******************************

