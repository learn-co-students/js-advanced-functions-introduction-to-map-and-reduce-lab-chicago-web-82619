// Your code here
function mapToNegativize(array) {
  const newArr = array.map(num => {
    return num * -1
  })
  return newArr
}

function mapToNoChange(array) {
  const newArr = array.map(num => {
    return num
  })
  return newArr
}

function mapToDouble(array) {
  const newArr = array.map(num => {
    return num * 2
  })
  return newArr
}

function mapToSquare(array) {
  const newArr = array.map(num => {
    return num * num
  })
  return newArr
}

function reduceToTotal(arr, startingPoint=0) {
  return arr.reduce(function(arr, currentValue) {
    return arr + currentValue
  }, startingPoint)
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
