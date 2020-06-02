import Section from '../section'
import Article from './article'
import Title from '../title'

export default {
  title: 'Article',
  component: Article,
}

export function Quote() {
  return (
    <Section>
      <Article>
        <Article.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada nunc id lacus suscipit vestibulum. Etiam a congue justo.
            Sed ipsum arcu, consectetur vitae maximus egestas, placerat nec dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada nunc id lacus suscipit vestibulum. Etiam a congue justo.
            Sed ipsum arcu, consectetur vitae maximus egestas, placerat nec dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada nunc id lacus suscipit vestibulum. Etiam a congue justo.
            Sed ipsum arcu, consectetur vitae maximus egestas, placerat nec dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada nunc id lacus suscipit vestibulum. Etiam a congue justo.
            Sed ipsum arcu, consectetur vitae maximus egestas, placerat nec dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada nunc id lacus suscipit vestibulum. Etiam a congue justo.
            Sed ipsum arcu, consectetur vitae maximus egestas, placerat nec dui.
          </p>
        </Article.Content>

        <Article.Sidebar>
          <Article.Quote>
            <Title as="h3" spaceAfter="0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Title>
          </Article.Quote>
        </Article.Sidebar>
      </Article>
    </Section>
  )
}
