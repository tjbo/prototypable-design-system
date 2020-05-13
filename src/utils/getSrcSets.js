export default function getSrcSets(sizes, data) {
  if (!data) {
    return null
  }

  const srcSets = sizes.map((size) => {
    return data[size]
  })

  srcSets.push({
    dimensions: data.dimensions,
    url: data.url,
  })

  return srcSets
    .map(({ url, dimensions: { width } }) => {
      return `${url} ${width}w`
    })
    .join(',')
}
