import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello, world!</Alert>
      )}
      <Button
        text="Click me"
        onClick={() => setAlertVisibility(!alertVisible)}
      />
    </div>
  );
}

export default App;
