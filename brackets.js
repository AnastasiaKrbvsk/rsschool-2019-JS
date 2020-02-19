module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
      return false;
    }
  
    let brackets = [];
  
    for (let i = 0; i < str.length; i++) {
      strElem = str[i];
      for (let j = 0; j < bracketsConfig.length; j++) {
  
        if (strElem === bracketsConfig[j][0]) {
          if (brackets[brackets.length-1] === bracketsConfig[j][1]) {
            brackets.splice(-1, 1);
          } else {
            brackets.push(strElem);
          }
        } else if (strElem === bracketsConfig[j][1]) {
          if (brackets.length > 0) {
            if (brackets[brackets.length-1] === bracketsConfig[j][0]) {
              brackets.splice(-1, 1);
            }
          }
        }
      }
    }
    return brackets.length == 0;
  }
  