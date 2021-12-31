import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        switch (response.status) {
          case 400:
          case 404:
            throw new Error(response.statusText)

          default:
            const data = await response.json()
            setData(data)
        }
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}
