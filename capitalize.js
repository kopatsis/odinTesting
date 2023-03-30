function capitalize(str) {
    let out = "";
    for (const letter of str){
        if(letter === letter.toUpperCase()){
            out += letter;
        } else {
            out += letter.toUpperCase();
        }
    }
    return out;
}

module.exports = capitalize;