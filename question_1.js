// generate  sequence of numbers
const Sequence = (count = 10, content = 1) => {
    var s = [];

    for (var i = 0; i < count; i++) s.push(content)

    return s
}

const SequenceX = Sequence()
const SequenceY = Sequence()

// function which will return the nth term of the sequence X
function nthTermOfSequenceX(n) {
    let current = Math.max(SequenceX[SequenceX.length - 1], SequenceY[SequenceY.length - 1])

    let index
    while (SequenceX.length <= n || SequenceY.length <= n) {
        index = Math.min(SequenceX.length, SequenceY.length) - 1
        current += 1
        if (current === SequenceX[index] + SequenceY[index])
            SequenceX.push(current)
        else SequenceY.push(current)
    }

    return SequenceX[n]
}

console.log(nthTermOfSequenceX(0));
