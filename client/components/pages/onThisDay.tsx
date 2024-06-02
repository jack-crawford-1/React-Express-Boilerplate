import { useEffect, useState } from 'react'
import { OnThisDayModel, OnThisDayResponse } from '../../../models/wiki'
import { getOnThisDay } from '../../apis/wiki'
import Loading from '../sections/Loading'

const placeholderImage = '../../../../../public/images/imageNotFound.jpeg'

function transformTitle(title: string): string {
  return title.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ')
}

export default function OnThisDay() {
  const [events, setEvents] = useState<OnThisDayModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOnThisDay = async () => {
      try {
        const data: OnThisDayResponse = await getOnThisDay()
        console.log('API Response:', data)

        if (data.selected) {
          setEvents(data.selected)
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
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }
    return date.toLocaleDateString('en-GB', options)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 className="m-5 text-3xl antialiased">
        <span className="font-extrabold">Wikipedia&apos;s On This Day </span>
        {today()}
      </h2>
      {events.length > 0 ? (
        <ul style={{ paddingLeft: '20px' }}>
          {events.map((event, index) => (
            <li
              key={index}
              style={{
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <img
                  src={
                    event.pages &&
                    event.pages.length > 0 &&
                    event.pages[0].thumbnail?.source
                      ? event.pages[0].thumbnail?.source
                      : placeholderImage
                  }
                  alt={`pic for event in ${event.year}`}
                  style={{
                    width: '150px',
                    height: '150px',
                    marginRight: '20px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="text-xl">
                  <strong>
                    {transformTitle(event.pages[0].title)}
                    <span> {event.year}</span>
                  </strong>
                </div>

                <span dangerouslySetInnerHTML={{ __html: event.text }} />
                {event.pages && event.pages.length > 0 && (
                  <>
                    <div style={{ marginTop: '5px' }}>
                      <a
                        href={event.pages[0].content_urls.desktop.page}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available</p>
      )}
    </div>
  )
}
