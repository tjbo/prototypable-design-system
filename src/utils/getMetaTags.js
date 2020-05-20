export default function (data, defaultTitle, defaultDescription) {
  const ogDescription =
    data.og_description || data.meta_description || defaultDescription
  const ogImage = data.og_image
  const ogTitle = data.og_title || data.meta_title || defaultTitle
  const ogType = data.og_type
  const metaDescription =
    data.meta_description || data.og_description || defaultDescription
  const metaTitle = data.meta_title || data.og_title || defaultTitle
  const metaNoindex = data.meta_noindex

  return [
    <meta property="og:description" content={ogDescription} />,
    <meta property="og:image" content={ogImage} />,
    <meta property="og:title" content={ogTitle} />,
    <meta property="og:type" content={ogType} />,
    <meta name="description" content={metaDescription} />,
    <title>{metaTitle}</title>,
    metaNoindex ? <meta name="robots" content="noindex" /> : null,
  ]
}
