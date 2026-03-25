import React, { useState } from 'react'

export default function useWordPressAjax () {
  const [isFetching, setFetching] = useState(false)

  const sendAjaxRequest = async data => {
    try {
      setFetching(true)
      const requestData = Object.assign({}, data, {
        nonce: window.${plugin_slug}_data && window.${plugin_slug}_data.nonce,
      });
      const response = await fetch(window.ajaxurl, {
        method: 'POST',
        body: new URLSearchParams(requestData).toString(),
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
