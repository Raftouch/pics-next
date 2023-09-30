import Alert from '@/components/Alert'
import { Pic } from '@/models/unsplash.pic'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Static Fetch - Pics Next App',
}

export default async function StaticPage() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )
  const image: Pic = await response.json()

  const width = Math.min(500, image.width)
  const height = (width / image.width) * image.height

  return (
    <div className="flex flex-col items-center gap-3">
      <Alert>
        This page fetches and caches data at build time. Even though the
        Unsplash API always returns a new image, we see the same image after
        refreshing the page until we compile the project again.
      </Alert>
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
