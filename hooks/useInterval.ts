import { DependencyList, useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number, deps?: DependencyList | undefined) => {
 const result = deps && deps.length > 1 ? [...deps] : []
 const savedCallback = useRef<() => void>()

 useEffect(() => {
  savedCallback.current = callback
 })

 useEffect(() => {
  function tick() {
   if (savedCallback.current) savedCallback.current()
  }

  let id = setInterval(tick, delay)
  return () => clearInterval(id)
 }, [delay, ...result])
}
