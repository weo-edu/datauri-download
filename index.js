module.exports = function(filename, data) {
  var link = document.createElement('a')
  link.setAttribute('href', encodeURI(data))
  link.setAttribute('download', filename)
  link.click()
}