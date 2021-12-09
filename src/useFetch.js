import { useState, useEffect } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState()
   const [isPending, setIsPending] = useState(true)
   const [error, setError] = useState()

   useEffect(() => {
      const AC = new AbortController()
         fetch(url, {signal: AC.signal})
         .then(res => {
            if (!res.ok) {
               throw Error('Could Not Fetch The Data For The Resource')
            }
            return res.json()
         })
         .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
         })
         .catch(err => {
            if (err.name === 'AbortError') {
               console.log('fetch was aborted');
            } else {
               setIsPending(false)
               setError(err.message)
            }
         })
      return () => AC.abort();
   }, [url])

   return {data, error, isPending}
}
 
export default useFetch;