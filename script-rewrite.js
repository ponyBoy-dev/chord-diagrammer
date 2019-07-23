//let position = "X32010"
//let diagram = ["", "E A D g b e", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|", "", "|-|-|-|-|-|"]


//var chords = makeChords("022000")

document.querySelector(".bouton").addEventListener('click', e => {
    let position = document.querySelector(".champPos").value
    document.querySelector(".result").innerHTML=makeChords(position)

})

function makeChords(pos) {

    
    const chords = [
        mainDroite(pos),
        '<u>E A D g b e</u>',
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
    return chords.join('\n')
}


function mainDroite(pos) {
    return pos.split('')
        .map(c => c === 'X' || c === '0' ? c : ' ')
        .join(' ')
}
function frette(pos, i) { 
    return pos.split('')
        .map(c => parseInt(c, 10) === i ? '<b>@</b>' : '|')
        .join(' ')
}
console.log(chords);