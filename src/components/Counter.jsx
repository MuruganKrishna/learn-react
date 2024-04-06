import { useState } from "react";
export default function Counter() {
  console.log("Rendering counter");
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>This is a counter {count}</h2>
      <button onClick={handleIncreament}>Click me to increament</button>
    </div>
  );
}
