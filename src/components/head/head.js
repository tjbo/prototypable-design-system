import GlobalStyles from './styles.css'

export default function () {
  return (
    <React.Fragment>
      <link
        rel="preload"
        as="style"
        href="/fonts/roboto-v20-latin-300.woff"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="style"
        href="/fonts/roboto-v20-latin-300.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        as="style"
        href="/fonts/roboto-v20-latin-700.woff"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="style"
        href="/fonts/roboto-v20-latin-700.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <GlobalStyles />
    </React.Fragment>
  )
}
