const callbacks = []
let currentBreakpoint

function refreshValue() {
  if (typeof window !== 'undefined') {
    currentBreakpoint = window
      .getComputedStyle(document.querySelector('body'), ':before')
      .getPropertyValue('content')
      .replace(/\"/g, '')

    for (let callback in callbacks) {
      callbacks[callback](currentBreakpoint)
    }
  }
}

export function addListener(callback) {
  if (typeof window !== 'undefined') {
    callbacks.push(callback)

    currentBreakpoint = window
      .getComputedStyle(document.querySelector('body'), ':before')
      .getPropertyValue('content')
      .replace(/\"/g, '')

    return currentBreakpoint
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', refreshValue)
}
