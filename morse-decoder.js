const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = '';
    let message_len = expr.length;
    for (let i = 0; i < message_len; i += 10) {
        let current_letter = '';
        if (expr[i] === '*') {
            message += ' ';
        }
        else {
            for ( j = i; j < i + 10; j += 2) {
                let morse_code = expr.substr(j, 2);
                if (morse_code === "00") {
                    current_letter += '';
                }
                if ( morse_code === "10") {
                    current_letter += '.';
                }
                if  (morse_code === "11") {
                    current_letter += '-';
                }
            }
            message += MORSE_TABLE[current_letter];
        }
         
    }
    return message;
}

module.exports = {
    decode
}