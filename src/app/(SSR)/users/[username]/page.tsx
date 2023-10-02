import { User } from '@/models/unsplash.user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface UsernameProps {
  params: { username: string }
}

async function getUser(username: string): Promise<User> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )

  if (response.status === 404) notFound()

  return await response.json()
}

// const getUserCached = cache(getUser) // if fetching data is made with axios or other

export async function generateMetadata({ params: { username } }: UsernameProps): Promise<Metadata> {
  const user = await getUser(username)
  // const user = await getUserCached(username)

  return {
    // title: user.first_name + ' ' + user.last_name
    title: ([user.first_name, user.last_name].filter(Boolean).join(' ') || user.username) + ' - Pics Next App'
  }
}

export default async function Username({ params: { username } }: UsernameProps) {
  // const user: User = await response.json()
  const user = await getUser(username)

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <a href={`https://unsplash.com/${user.username}`}>Unsplash Profile</a>
    </div>
  )
}
