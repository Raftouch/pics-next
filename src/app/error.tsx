'use client'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>error</h1>
      <p>Something went wrong, sorry Buddy</p>
      <button className="btn" onClick={reset}>
        Try again
      </button>
    </div>
  )
}
