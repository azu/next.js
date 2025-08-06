import { unstable_cacheLife } from 'next/cache'

export default async function CacheLifeSecondsPage() {
  'use cache'
  unstable_cacheLife('seconds')

  const randomNumber = Math.random()

  return (
    <div id="cache-life-seconds-page">
      <p>Cache Life Seconds Page</p>
      <p id="random-value">{randomNumber}</p>
    </div>
  )
}
