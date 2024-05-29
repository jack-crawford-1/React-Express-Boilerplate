export const getMessage = async () => {
  const response = await fetch('/api/v1/fruits/message')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.message
}
