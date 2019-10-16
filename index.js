const mapToNegativize = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * -1)
    }
    return newArr
}

const mapToNoChange = arr => arr;

const mapToDouble = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

const mapToSquare = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}

const reduceToTotal = (arr, start = 0) => {
    let sum = start;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const reduceToAllTrue = arr => {
    let value = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]===false){
            value = false;
        }
    }
    return value;
}

const reduceToAnyTrue = arr => {
    let value = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === true){
            value = true;
        }
    }
    return value;
}