module.exports = function(filename, data) {
  var link = document.createElement('a')
  link.setAttribute('href', encodeURI(data))
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
