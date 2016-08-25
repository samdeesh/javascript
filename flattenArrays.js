

function flatten(array) {
  return JSON.parse("[" + 
               JSON.stringify(array)
                   .replace(/[\[\]]+/g,"")
                   .replace(/,,/g,",") +
               "]");
}
