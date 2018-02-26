const strongPassword = (n, password) => {
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    let characters = 0;
    if (!check(password.split(''), numbers.split(''))) {
        characters += 1;
    }
    if (!check(password.split(''), lower_case.split(''))) {
        characters += 1;
    }
    if (!check(password.split(''), upper_case.split(''))) {
        characters += 1;
    }
    if (!check(password.split(''), special_characters.split(''))) {
        characters += 1;
    }
    console.log(characters);
}

strongPassword(3, 'Ab1');