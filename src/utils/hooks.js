import { useEffect, useState } from 'react'
import { url } from '../api/ghibliApi'

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

export function useApiSearch(from, to, id, actual = []) {
  const { isLoading, error, data } = useFetch(url[to].getAll(`id,${from},url`))
  const [result, setResult] = useState(actual)

  useEffect(() => {
    if (!from || !to || !id) {
      return
    }

    if (data && data.length && !error && !isLoading) {
      const filtered = data
        .filter((elt) => elt[from].includes(url[from].getSimpleOne(id)))
        .filter((elt) => !actual.includes(elt.url))

      setResult(
        actual.concat(filtered.map((elt) => elt.url.replace('htps', 'https')))
      )
    }
  }, [actual, data, error, from, id, isLoading, to])

  return result.filter((eltUrl) => eltUrl !== url[to].getSimpleAll())
}
