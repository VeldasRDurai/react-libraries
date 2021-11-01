import { useCallback, useState, useEffect } from "react"

const useLocalStorage = (key, defaultValue) => useStorage(key, defaultValue, window.localStorage)
const useSessionStorage = (key, defaultValue) => useStorage(key, defaultValue, window.sessionStorage)

const useStorage = (key, defaultValue, storageObject) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return typeof defaultValue === "function" ? defaultValue() : defaultValue ;
  })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  const remove = useCallback(() => setValue(undefined) , [])

  return [value, setValue, remove]
}

export { useLocalStorage, useSessionStorage };
