import React, { useState } from "react";

export default function useWordPressAjax() {
  const [isFetching, setFetching] = useState(false);

  const fetch = async (data) => {
    return await new Promise(function (resolve, reject) {
      try {
        setFetching(true);

        window.jQuery.post(window.ajaxurl, data, function (response) {
          setFetching(false);
          resolve(response);
        });
      } catch (error) {
        console.error(error);
        setFetching(false);
        reject(error);
      }
    });
  };

  return { isFetching, fetch };
}
