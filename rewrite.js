//console.log('loaded rewriter', document.body)

const rewrite = () => {
  Array.prototype.forEach.call(document.body.getElementsByClassName("a-link-normal"), (elem) => {
    elem.href = elem.href.replace("music/player/albums", "dp")
  })
}

window.addEventListener('WebComponentsReady', rewrite)
document.addEventListener('DOMContentLoaded', rewrite)

rewrite()
