export default function clickEmail(email, event) {
  event.nativeEvent.stopPropagation()
  window.location = `mailto:${email}`
}
