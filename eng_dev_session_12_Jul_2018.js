const smallestMissing = (A) => {
  A.sort();
 
  for (var idx = 0; idx < A.length; idx ++) {
   if (A[idx] >= 0) {
     if(!A.includes(A[idx] + 1)) {
       return A[idx] + 1;
     }
   }
   else if (!A.includes(1)) {
     return 1;
   }
  }
 }
 
 console.log(smallestMissing([1, 3, 6, 4, 1, 2]));
 console.log(smallestMissing([1, 2, 3]));
 console.log(smallestMissing([-1, -3]));
 console.log(smallestMissing([-10000000000, 10000000]));
 console.log(smallestMissing([-0, 1, 10000000]));