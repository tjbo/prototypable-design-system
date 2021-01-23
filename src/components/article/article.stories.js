import Section from '../section'
import Article from './article'

export default {
  title: 'Article',
  component: Article,
}

const MockContent = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
        nunc id lacus suscipit vestibulum. Etiam a congue justo. Sed ipsum arcu,
        consectetur vitae maximus egestas, placerat nec dui.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
        nunc id lacus suscipit vestibulum. Etiam a congue justo. Sed ipsum arcu,
        consectetur vitae maximus egestas, placerat nec dui.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
        nunc id lacus suscipit vestibulum. Etiam a congue justo. Sed ipsum arcu,
        consectetur vitae maximus egestas, placerat nec dui.
      </p>
    </div>
  )
}

export function Quote() {
  return (
    <Section>
      <Article>
        <Article.Content>
          <MockContent />
        </Article.Content>
        <Article.Sidebar>
          <img src="/images/houses1.jpg" />
        </Article.Sidebar>
      </Article>
    </Section>
  )
}
