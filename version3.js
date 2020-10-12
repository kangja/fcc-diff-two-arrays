function diffArray(arr1, arr2) {
  const union = [];
  for (const el of arr1) {
    if (!union.includes(el)) {
      union.push(el);
    }
  }
  for (const el of arr2) {
    if (!union.includes(el)) {
      union.push(el);
    }
  }
  console.log("The value of union is " + union)
  // The value of union is 1,2,3,5,4

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
