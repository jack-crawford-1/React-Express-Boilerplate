import { useEffect, useState } from 'react'
import { OnThisDayModel } from '../../../models/wiki'

// wiki api using superagent with env file to store access token

export default function OnThisDay() {
  const [onThisDay, setOnThisDay] = useState<OnThisDayModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/api/onthisday')
        if (!response.ok) {
          throw new Error('Failed to fetch article')
        }
        const data = await response.json()
        console.log(data)

        if (data.selected) {
          setOnThisDay(data.selected)
        }
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 className="text-bold m-5 text-3xl">
        Wikipedia&apos;s &quot;On This Day&quot;
      </h2>
      <p className="m-2 pb-7">
        Using Superagent and the wiki api with an env file to store access
        tokens
      </p>
      {onThisDay.length > 0 ? (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {onThisDay.map((event, index) => (
            <li key={index}>
              <strong>{event.year}:</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: event.text }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available</p>
      )}
    </div>
  )
}
