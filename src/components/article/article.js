export default function Article({ body }) {
  return <div dangerouslySetInnerHTML={{ __html: body }} />
}
