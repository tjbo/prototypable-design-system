import short from 'short-uuid'

export default function (data, defaultTitle, defaultDescription, defaultImage) {
  const ogDescription =
    data.og_description || data.meta_description || defaultDescription
  const ogImage = data.og_image || defaultImage
  const ogTitle = data.og_title || data.meta_title || defaultTitle
  const ogType = data.og_type
  const metaDescription =
    data.meta_description || data.og_description || defaultDescription
  const metaTitle = data.meta_title || data.og_title || defaultTitle
  const metaNoindex = data.meta_noindex
  const canonical = data.siteRoot + data.slug

  return [
    <meta
      property="og:description"
      content={ogDescription}
      key={short.generate()}
    />,
    <meta property="og:image" content={ogImage} key={short.generate()} />,
    <meta property="og:title" content={ogTitle} key={short.generate()} />,
    <meta property="og:type" content={ogType} key={short.generate()} />,
    <meta
      name="description"
      content={metaDescription}
      key={short.generate()}
    />,
    <title key={short.generate()}>{metaTitle}</title>,
    canonical && (
      <meta name="canonical" href={canonical} key={short.generate()} />
    ),
    metaNoindex ? (
      <meta name="robots" content="noindex" key={short.generate()} />
    ) : null,
  ]
}
