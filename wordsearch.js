const wordSearch = (letters, word) => { 
    let v_arr = [];
    const horizontalJoin = letters.map(ls => ls.join(''))
    if(!letters.length){
        return false;
    }

    for(let l=0;l<letters[0].length;l++){
    const vertical=letters.map(ls=>ls[l]);
    const vert=vertical.join('')
    if (horizontalJoin[l].includes(word) || vert.includes(word)){ 
        return true
        }
    }
    return false;
}
    // for (l of vert) {
    //     if (l.includes(word)){ 
    //     return true
    //     }
    // }

    // const horizontalJoin = letters.map(ls => ls.join(''))
    // for (l of horizontalJoin) {
    //     if (l.includes(word)){ 
    //     return true
    //     }
    // }
    // return false;

 wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'E', 'R', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'K', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

module.exports = wordSearch