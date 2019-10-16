// Your code here
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]*-1)
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let n = []
    for (let i = 0; i < array.length; i++) {
        n.push(array[i]*2)
    }
    return n
}

function mapToSquare(array) {
    let n = []
    for (let i =0; i<array.length; i++) {
        n.push(array[i]*array[i])
    }
    return n
}

function reduceToTotal(array, startingPoint = 0) {
    let t = startingPoint
    for (let i =0; i<array.length; i++) {
        t += array[i]
    }
    return t
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
  }

