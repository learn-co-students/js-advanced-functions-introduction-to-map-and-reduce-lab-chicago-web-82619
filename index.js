// Your code here
const mapToNegativize = (array) => {
    let r = []
    for (let i = 0; i < array.length; i++ ) {
      r.push(-1 * array[i])
    }
    return r
}

function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i])
    }
    return r
  }

  const mapToDouble = (sourceArray) => {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(sourceArray[i] * 2)
    }
    return r
  }

  const mapToSquare = (sourceArray) => {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      r.push(sourceArray[i] ** 2)
    }
    return r
  }

  const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint;

    for (let i = 0; i < sourceArray.length; i++ ) {
      total += sourceArray[i];
    }
    return total
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