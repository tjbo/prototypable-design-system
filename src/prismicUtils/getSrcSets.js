function getSrcSets(sizes, data) {
  if (!data) {
    return null
  }

  const srcSets = sizes.map((size) => {
    if (!!data[size]) {
      return data[size]
    }
  })

  if (data && data.dimensions && data.url) {
    srcSets.push({
      dimensions: data.dimensions,
      url: data.url,
    })
  }

  if (!srcSets.length) {
    return
  }

  //remove empty values
  return srcSets
    .filter((value) => Object.keys(value).length !== 0)
    .map(({ url, dimensions: { width } }) => {
      return `${url} ${width}w`
    })
    .join(',')
}

export default getSrcSets
