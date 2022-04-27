function searchForPosition(array, value) {
    let position = array.indexOf(value)

    let lastPos = array.lastIndexOf(value)

    if (position >= 0)
        console.log('Found value: ' + value + ' at ' + position)
    else if (position >= 0 && lastPos >= 0) {
        console.log('First Position ' + value + ' at ' + position)
        console.log('Last Position ' + value + ' at ' + lastPos)
    } else
        console.log(value + '2 not found')
}

console.log(searchForPosition([5, 7, 3, 5, 9, 12, 45], 3))