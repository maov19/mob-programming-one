// You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) - DONE
// and turn everything into the same case (lower or upper case) in order to check for **anagrams**. - DONE
//order both words alphabetically- DONE
//check if they are ===
module.exports = function anagramFinder(strOne, strTwo) {
  // write your code here
  strOne = strOne.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  strTwo = strTwo.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")

  if (strOne === strTwo) {
    return true;    
  } else {
    return false;
  }
}




