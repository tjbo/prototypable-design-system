function getLink(link, paths) {
  if (!link || !paths) {
    return null
  }
  return paths[link.id]
}

export default getLink
