import React, { useState } from 'react'

export default function useWordPressAjax () {
  const [isFetching, setFetching] = useState(false)

  const sendAjaxRequest = async data => {
    try {
      setFetching(true)
      const response = await fetch(window.ajaxurl, {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      const result = await response.json()
      setFetching(false)
      return result
    } catch (error) {
      console.error(error)
      setFetching(false)
      throw error
    }
  }

  return { isFetching, sendAjaxRequest }
}
