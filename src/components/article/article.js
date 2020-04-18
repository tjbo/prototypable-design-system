export default function Article({ body }) {
  return <article dangerouslySetInnerHTML={{ __html: body.text }} />
}
