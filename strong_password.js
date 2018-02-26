const strongPassword = (n, password) => {
    if (1 <= n && n <= 100 && n === password.length) {
        const numbers = /\d/;
        const lower_case = /[a-z]/;
        const upper_case = /[A-Z]/;
        const special_characters = /[!@#$%^&*()-+]/;
        let characters = 0;
        if (!numbers.test(password)) {
            characters += 1;
        }
        if (!lower_case.test(password)) {
            characters += 1;
        }
        if (!upper_case.test(password)) {
            characters += 1;
        }
        if (!special_characters.test(password)) {
            characters += 1;
        }
        if (n < 6) {
            let missing = 6 - n;
            if (characters < missing) {
                console.log(missing);
            }
            else {
                console.log(characters);
            }
        } else {
            console.log(characters);
        }
    }
}

strongPassword(11, '#HackerRank');