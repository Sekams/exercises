const marsExploration = (s) => {
    if (s.length >= 1 && s.length <= 99 && s.length % 3 === 0 && /^[A-Z]+$/.test(s)) {
        let alerationCount = 0;
        for (idx = 0; idx < s.length; idx++) {
            let char = s.charAt(idx);
            if (char !== 'S' && char !== 'O') {
                alerationCount = alerationCount + 1;
            }
        }
        console.log(alerationCount);
    }
}

marsExploration('SOSSPSSQSSOR');