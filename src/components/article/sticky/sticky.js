import Grid from '../../grid'

export default function ({ children, textAlign }) {
  return (
    <Grid.Col
      horizontalPadding={1}
      isSticky={true}
      width="34%"
      textAlign="center"
    >
      {children}
    </Grid.Col>
  )
}
