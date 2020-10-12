function diffArray(arr1, arr2) {
  const union = new Set([...arr1, ...arr2])
  // console.log(union)
  // Set { 1, 2, 3, 5, 6, 4 }

  


  const symmDiff = [];
  for (const currentEl of union) { //this is known as the for...of loop. Each element of the array will be contained in currentEl.

    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symmDiff.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symmDiff.push(currentEl);
    }
  }

  return symmDiff;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));
// [4]
