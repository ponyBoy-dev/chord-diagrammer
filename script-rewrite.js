//let position = "X32010"
//let diagram = ["", "E A D g b e", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|"]


var chords = makeChords("X32010")

function makeChords(pos) {

    
    const chords = [
        mainDroite(pos),
        'E A D g b e',
    ]

    const fretNums = pos.split('')
        .map(c => parseInt(c, 10))
        .filter(c => !isNaN(c))
    const maxFret = Math.max(...fretNums)

    for (let i = 1; i <= maxFret; i++) {
        chords.push(frette(pos, i))
        chords.push('|-|-|-|-|-|')
    }

    console.log(chords.join('\n'));
    return chords
}


function mainDroite(pos) {
    return pos.split('')
        .map(c => c === 'X' || c === '0' ? c : ' ')
        .join(' ')
}
function frette(pos, i) { 
    return pos.split('')
        .map(c => parseInt(c, 10) === i ? '@' : '|')
        .join(' ')
}
console.log(chords);