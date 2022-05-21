// This function converts a string into title case, given an optional list of exceptions. The list of exceptions will be given as a string with each word separated by a space.

function titleCase(title, minorWords) {
    const arrayTitle = title ? title.toLowerCase().split(" ") : ''
    const arrayMinor = minorWords ? minorWords.toLowerCase().split(" ") : ''
    let titleString = ''
    for (let w = 0; w < arrayTitle.length; w++) {
      if (w === 0 || !arrayMinor.includes(arrayTitle[w])) {
        titleString += arrayTitle[w][0].toUpperCase() + arrayTitle[w].slice(1) + " "
      }
      else {
        titleString += arrayTitle[w].toLowerCase() + " "
      }
    }
    return titleString.slice(0, -1)
  }