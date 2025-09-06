import Image from 'next/image'
import Link from 'next/link'
import type { OstDocument } from 'outstatic'

import { Card, CardContent } from '@/components/primitives/card'

import { Badge } from './primitives/badge'

type Item = {
  tags?: { value: string; label: string }[]
} & OstDocument

type Props = {
  collection: 'posts'
  title?: string
  items: Item[]
  priority?: boolean
}

const ContentGrid = ({
  title = 'More',
  items,
  collection,
  priority = false
}: Props) => {
  return (
    <section id={collection}>
      <h2 className='mb-8 text-5xl leading-tight font-bold tracking-tighter md:text-6xl'>
        {title}
      </h2>
      <div className='mb-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
        {items.map((item, id) => (
          <Link key={item.slug} href={`/${collection}/${item.slug}`}>
            <Card>
              <CardContent className='p-3'>
                <Image
                  src={item.coverImage ?? ''}
                  alt={`Cover Image for ${item.title}`}
                  className='h-auto w-full object-cover object-center'
                  width={0}
                  height={0}
                  sizes='(min-width: 768px) 347px, 192px'
                  priority={priority && id <= 2}
                />
                {collection === 'posts' && (
                  <div>
                    <div className='flex gap-2'>
                      {Array.isArray(item?.tags)
                        ? item.tags.map(({ label }) => (
                            <Badge key={label}>{label}</Badge>
                          ))
                        : null}
                    </div>
                    <h3 className='mb-2 text-xl leading-snug font-bold hover:underline'>
                      {item.title}
                    </h3>
                    <div className='text-md mb-4 text-slate-700'></div>
                    <p className='mb-4 text-lg leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ContentGrid
