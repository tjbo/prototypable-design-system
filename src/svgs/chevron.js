import theme from '../components/theme'

export default function Chevron() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path
        fill={theme.colors.red['800']}
        d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
      />
    </svg>
  )
}
