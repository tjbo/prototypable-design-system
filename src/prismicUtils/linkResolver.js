function linkResolver(props) {
  const { path, __typename } = props
  if (
    __typename === 'PageBodyRelatedPost' ||
    __typename === 'PostBodyRelatedPost'
  ) {
    return `/blog/${path}`
  }

  return props.path
}

export default linkResolver
