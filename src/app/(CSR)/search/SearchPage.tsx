'use client'

import { FormEvent } from 'react'

export default function SearchPage() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const query = formData.get('query')?.toString().trim()

    if (query) {
     alert()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="join">
        <input
          className="input input-bordered join-item"
          name="query"
          placeholder="Search"
        />
        <button className="btn join-item">Search</button>
      </div>
    </form>
  )
}
