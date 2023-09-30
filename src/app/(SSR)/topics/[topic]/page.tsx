import { Pic } from '@/models/unsplash.pic'
import { Metadata } from 'next'
import Image from 'next/image'

// enables to fetch data from generateStaticParams() only !
export const dynamicParams = false

interface TopicProps {
  params: { topic: string }
  //   searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params: { topic } }: TopicProps): Metadata {
  return {
    title: topic + ' - Pics Next App',
  }
}

export function generateStaticParams() {
  return ['health', 'dogs', 'coding'].map((topic) => ({ topic }))
}

export default async function Topic({ params: { topic } }: TopicProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=4&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )
  const images: Pic[] = await response.json()

  return (
    <div>
      <h1 className="text-center uppercase mb-5">{topic}</h1>
      {images.map((pic) => (
        <Image
          key={pic.id}
          src={pic.urls.raw}
          alt={pic.descirption}
          width={250}
          height={250}
          className="object-cover m-2 rounded-md"
        />
      ))}
    </div>
  )
}
