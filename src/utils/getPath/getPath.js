function getPath({ category, path }) {
  if (category === 'root' && path === 'index') {
    return `/`
  } else if (category === 'root') {
    return `/${path}/`
  } else {
    return `/${category}/${path}/`
  }
}

export default getPath
