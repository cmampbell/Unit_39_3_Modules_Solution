const choice = (arr) => {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

const remove = (arr, elem) => {
    const idx = arr.indexOf(elem)

    const removed = arr.splice(idx, 1)[0]

    return removed
}

export {choice, remove}