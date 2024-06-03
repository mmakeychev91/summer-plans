import vars from '../vars'

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fix-block')
  const pagePosition = parseInt(vars.bodyEl.dataset.position, 10)
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px'
  })
  vars.bodyEl.style.paddingRight = '0px'

  vars.bodyEl.style.top = 'auto'
  vars.bodyEl.classList.remove('disable-scroll')
  window.scroll({
    top: pagePosition,
    left: 0
  })
  vars.bodyEl.removeAttribute('data-position')

  setTimeout(() => {
    vars.htmlEl.style.scrollBehavior = 'smooth'
  }, 0)
}
