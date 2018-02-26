const diagonalDifference = (order, inputs) => {
    if (inputs.length === order) {
        let lines = [];
        inputs.map((line) => {
            let lineInputs = line.split(' ').map(Number);
            if (lineInputs.length === order) {
                lines.push(lineInputs);
            }
        });
        if (lines.length === order) {
            let major = 0;
            let minor = 0;
            for (idx = 0; idx < order; idx++) {
                let majorNumber = lines[idx][idx];
                let minorNumber = lines[idx][(order - (idx + 1))];
                if (majorNumber >= -100 && majorNumber <= 100 && minorNumber >= -100 && minorNumber <= 100) {
                    major = major + majorNumber;
                    minor = minor + minorNumber;
                }
            }
            console.log(Math.abs(major - minor));
        }
    }
}

diagonalDifference(3, ['11 2 4', '4 5 6', '10 8 -12']);