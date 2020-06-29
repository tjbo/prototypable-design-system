import Tabs from './'

export default {
  title: 'Tabs',
  component: Tabs,
}

export function Default() {
  return (
    <Tabs>
      <div label="Gator">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Croc">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Tabs>
  )
}
