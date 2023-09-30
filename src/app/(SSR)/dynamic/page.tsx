import Alert from '@/components/Alert'
import { Pic } from '@/models/unsplash.pic'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dynamic Fetch - Pics Next App',
}

export default async function DynamicPage() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    { next: { revalidate: 0 } }
  )
  const image: Pic = await response.json()

  const width = Math.min(500, image.width)
  const height = (width / image.width) * image.height

  return (
    <div className="flex flex-col items-center gap-3">
      <Alert>Dynamic Page</Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.descirption}
        className="rounded-md"
      />
      <p className="italic">
        credit to{' '}
        <Link className="font-bold" href={`/users/${image.user.username}`}>
          {image.user.username}
        </Link>
      </p>
    </div>
  )
}
