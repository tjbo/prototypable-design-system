const callbacks = []
let currentBreakpoint

function refreshValue() {
  currentBreakpoint = window
    .getComputedStyle(document.querySelector('body'), ':before')
    .getPropertyValue('content')
    .replace(/\"/g, '')

  for (let callback in callbacks) {
    callbacks[callback](currentBreakpoint)
  }
}

window.addEventListener('resize', refreshValue)

export function addListener(callback) {
  callbacks.push(callback)

  currentBreakpoint = window
    .getComputedStyle(document.querySelector('body'), ':before')
    .getPropertyValue('content')
    .replace(/\"/g, '')

  return currentBreakpoint
}
