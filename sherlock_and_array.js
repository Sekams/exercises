const sherlockAndArray = (testCases, inputs) => {
    if ((inputs.length / 2) === testCases) {
        for (testCase = 0; testCase < (testCases * 2); testCase++) {
            let n = Number(inputs[testCase]);
            let array = inputs[testCase + 1].split(' ').map(Number);
            if (n === array.length) {
                let exists = false;
                if (n > 1) {
                    const add = (a, b) => a + b
                    for (idx = 1; idx < (n - 1); idx++) {
                        if (array.slice(0, idx).reduce(add) === array.slice(idx + 1).reduce(add)) {
                            exists = true;
                        }
                    }
                } else {
                    exists = true;
                }
                if (exists) {
                    console.log('YES');
                } else {
                    console.log('NO');
                }
            }
            testCase += 1;
        }
    }
}

sherlockAndArray(2, ["3", "1 2 3", "4", "1 2 3 3"]);