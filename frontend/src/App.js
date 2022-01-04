import React from "react";
//
import useWordPressAjax from "./hooks/useWordPressAjax";

const App = () => {
  const wp = useWordPressAjax();

  const handleClick = async () => {
    const data = {
      action: "save_config",
    };

    const response = await wp.fetch(data);

    alert(response);
  };

  return (
    <React.Fragment>
      <h1>A WordPress React Plugin Starter</h1>
      <p>A button that makes an ajax request to your WordPress backend.</p>
      <button onClick={handleClick}>Save Config</button>
    </React.Fragment>
  );
};

export default App;
