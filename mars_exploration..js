const marsExploration = (s) => {
    let msgLength = s.length;
    if (msgLength >= 1 && msgLength <= 99) {
        if ((msgLength % 3) === 0) {
            if (/^[A-Z]+$/.test(s)) {
                let alerationCount = 0;
                for (idx = 0; idx < s.length; idx++) {
                    let char = s.charAt(idx);
                    if (char !== 'S' && char !== 'O') {
                        alerationCount = alerationCount + 1;
                    }
                }
                console.log(alerationCount);
            } else {
                console.log("Invalid Input.")
            }
        } else {
            console.log("Invalid Length.")
        }
    } else {
        console.log("Input Too Long.")
    }
}

marsExploration('SOSSPSSQSSOR');