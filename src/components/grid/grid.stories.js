import Grid from './grid'

export default {
  title: 'Grid',
  component: Grid,
}

export function Default() {
  return (
    <Grid alignItems="stretch">
      <Grid.Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        volutpat arcu, id congue mi ullamcorper at. Proin sit amet hendrerit
        augue, vel fringilla ipsum.
      </Grid.Col>
      <Grid.Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        volutpat arcu, id congue mi ullamcorper at. Proin sit amet hendrerit
        augue, vel fringilla ipsum.
      </Grid.Col>
      <Grid.Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Grid.Col>
    </Grid>
  )
}

export function EqualHeight() {
  return (
    <Grid alignItems="stretch">
      <Grid.Col alignSelf="stretch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        volutpat arcu, id congue mi ullamcorper at. Proin sit amet hendrerit
        augue, vel fringilla ipsum.
      </Grid.Col>
      <Grid.Col alignSelf="stretch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        volutpat arcu, id congue mi ullamcorper at. Proin sit amet hendrerit
        augue, vel fringilla ipsum.
      </Grid.Col>
      <Grid.Col alignSelf="stretch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Grid.Col>
    </Grid>
  )
}
