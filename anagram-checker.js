module.exports = 
function anagramCheck(str1, str2) {

  let orderStr1 = str1.toLowerCase().replace(/\W/g, "").split('').sort().join('');
  let orderStr2 = str2.toLowerCase().replace(/\W/g, "").split('').sort().join('');

  if (orderStr1 === orderStr2) {
    return 'true';
  } else {
    return 'false';
  }
}

// create two variables to compare - done
// substract variables into single characters
// eliminate all non alphanumeric
// turn all to lower case
// order them alphabetically
// if str1 = str2, true else false
