import React, { useState, useEffect } from 'react'

export default function DebounceInput({ search, setSearch }) {
  const [timeoutId, setTimeoutId] = useState(null)

  const handleChange = (event) => {
    const newSearchValue = event.target.value
    setSearch(newSearchValue)

    // Clear any existing timeout before setting a new one
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = setTimeout(() => {
      // Update state with the latest value after the delay
      setSearch(newSearchValue)
      console.log(newSearchValue)
    }, 500) // Adjust delay (in milliseconds) as needed

    setTimeoutId(newTimeoutId)
  }

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  )
}
