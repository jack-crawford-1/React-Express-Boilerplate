import { useEffect, useState } from 'react'
import { Image, OnThisDayModel } from '../../../models/wiki'
import { getOnThisDay } from '../../apis/wikiOnThisDay'
import Loading from '../sections/Loading'

export default function OnThisDay() {
  const [image, setImage] = useState<Image | null>(null)
  const [onThisDay, setOnThisDay] = useState<OnThisDayModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOnThisDay = async () => {
      try {
        const data = await getOnThisDay()

        if (data.selected) {
          setOnThisDay(data.selected)
        }

        if (data.image) {
          setImage(data.image)
        }
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchOnThisDay()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  function today(): React.ReactNode {
    const dateString = '06/2024'
    const [month, year] = dateString.split('/')

    const parsedMonth = parseInt(month)
    const parsedYear = parseInt(year)

    if (isNaN(parsedMonth) || isNaN(parsedYear)) {
      console.error('Invalid date format')
      return 'Invalid date format'
    }

    const date = new Date(parsedYear, parsedMonth - 1)
    console.log(date.toString())
    return date.toString()
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 className="m-5 text-3xl antialiased">
        <span className="font-extrabold">On This Day:</span> {today()}
      </h2>
      {image && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src={image.source}
            alt={image.title}
            style={{ maxWidth: '200px', marginRight: '20px' }}
          />
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: image.title }} />
            <p
              dangerouslySetInnerHTML={{ __html: image.description.html || '' }}
            />
          </div>
        </div>
      )}
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
