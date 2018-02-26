const sort = (array) => {
    const len = array.length;
    if (len < 2) {
        return array;
    }
    const pivot = Math.ceil(len / 2);
    return merge(sort(array.slice(0, pivot)), sort(array.slice(pivot)));
}

const merge = (left, right) => {
    let result = [];
    while ((left.length > 0) && (right.length > 0)) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    result = result.concat(left, right);
    return result;
}

const miniMaxSum = (rawInput) => {

    let inputs = sort(rawInput.split(' ').map(Number));
    const isInRange = (currentValue) => {
        return currentValue >= 1 && currentValue <= 1000000000;
    }
    if (inputs.length === 5 && inputs.every(isInRange)) {
        const add = (a, b) => a + b
        const max = inputs.slice(1).reduce(add);
        const min = inputs.slice(0, 4).reduce(add);
        console.log(min + " " + max);
    } else {
        console.log('Input Too Long.')
    }
}

miniMaxSum('4 3 5 2 1');