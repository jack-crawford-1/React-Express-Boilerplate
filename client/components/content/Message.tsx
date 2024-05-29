import { useMessage } from '../hooks/useMessage'

function Message() {
  const { data: message } = useMessage()
  return (
    <div>
      <h1>Message Page</h1>
      {message && <div>{message}</div>}{' '}
    </div>
  )
}

export default Message
