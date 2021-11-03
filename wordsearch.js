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
   

module.exports = wordSearch
