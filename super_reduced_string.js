const superReducedString = (s) => {
    if (/^[a-z]+$/.test(s) && 1 <= s.length && s.length <= 100) {
        let trimmed = '';
        for (idx = 0; idx < s.length; idx++) {
            if (s.charAt(idx) === s.charAt(idx + 1)) {
                idx += 1;
            } else {
                trimmed += s.charAt(idx);
            }
        }
        if (trimmed.length === 0) {
            console.log('Empty String');
        } else if (trimmed === s) {
            console.log(trimmed);
        } else {
            superReducedString(trimmed);
        }
    }
}

superReducedString('aaabccddd');