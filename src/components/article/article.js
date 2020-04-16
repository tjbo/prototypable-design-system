export default function Article({ body }) {
  console.log('article', body)
  return <div dangerouslySetInnerHTML={{ __html: body.text }} />
}
