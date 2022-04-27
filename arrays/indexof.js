function searchForPosition(array, value) {
    let position = array.indexOf(value)

    if (position >= 0)
        console.log('Found value: ' + value + ' at ' + position)
    else
        console.log(value + '2 not found')
}

console.log(searchForPosition([5, 7, 3, 9, 12, 45], 5))