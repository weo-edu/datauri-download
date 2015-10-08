module.exports = function(filename, data) {
  if (isMsie()) {
    var blob = new Blob([data], {type: 'application/csv;charset=utf-8;'})
    navigator.msSaveBlob(blob, filename)
  } else {
    var link = document.createElement('a')
    link.setAttribute('href', encodeURI(data))
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

function isMsie() {
  return uaContains('MSIE ') || uaContains('Trident/') || uaContains('Edge/')
}

function uaContains(str) {
  return window.navigator.userAgent.indexOf(str) >= 0
}
