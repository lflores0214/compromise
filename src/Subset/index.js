const selections = [
  require('./acronyms'),
  require('./contractions'),
  require('./parentheses'),
  require('./possessives'),
]

const extend = function(Doc) {
  selections.forEach(addFn => addFn(Doc))
  return Doc
}
module.exports = extend
