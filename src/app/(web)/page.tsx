import { load } from 'outstatic/server'

import ContentGrid from '@/components/ContentGrid'
import { Main, Section, Container, Prose } from '@/components/ds'
import markdownToHtml from '@/lib/markdownToHtml'

export default async function Index() {
  const { content, allPosts } = await getData()

  return (
    <Main>
      <Section>
        <Container>
          <Prose isSpaced>
            <div className='mx-auto max-w-6xl px-5'>
              <section className='mt-16 mb-16 md:mb-12'>
                <div
                  className='prose lg:prose-2xl home-intro'
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </section>
              {allPosts.length > 0 && (
                <ContentGrid
                  title='Posts'
                  items={allPosts}
                  collection='posts'
                  priority
                />
              )}
            </div>
          </Prose>
        </Container>
      </Section>
    </Main>
  )
}

async function getData() {
  const db = await load()

  const page = await db
    .find({ collection: 'pages', slug: 'home' }, ['content'])
    .first()

  const content = await markdownToHtml(page.content)

  const allPosts = await db
    .find({ collection: 'posts' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'tags'
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  return {
    content,
    allPosts
  }
}
