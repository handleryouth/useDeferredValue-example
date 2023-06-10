import { useState } from "react";
import List from "./List";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <List text={input} />
    </>
  );
}

export default App;
