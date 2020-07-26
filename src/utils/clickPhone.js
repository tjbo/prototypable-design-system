export default function clickLink(tel, event) {
  event.nativeEvent.stopPropagation()
  window.location.href = 'tel://' + tel
}
