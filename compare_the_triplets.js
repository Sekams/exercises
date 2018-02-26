const compareTheTriplets = (alice, bob) => {
    let aliceTriplets = alice.split(' ').map(Number);
    let bobTriplets = bob.split(' ').map(Number);
    let aliceScore = 0
    let bobScore = 0;
    if (aliceTriplets.length === bobTriplets.length) {
        for (idx = 0; idx < alice.length; idx++) {
            if (aliceTriplets[idx] >= 1 && aliceTriplets[idx] <= 100 && bobTriplets[idx] >= 1 && bobTriplets[idx] <= 100) {
                if (aliceTriplets[idx] > bobTriplets[idx]) {
                    aliceScore++;
                } else if (aliceTriplets[idx] < bobTriplets[idx]) {
                    bobScore++;
                }
            }
        }
        console.log(aliceScore + ' ' + bobScore);
    }
}

compareTheTriplets("5 6 7", "3 6 10");