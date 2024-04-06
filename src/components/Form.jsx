import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const handlerInput = (e) => {
    setName(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        onChange={handlerInput}
        value={name}
        name="name"
        placeholder="Enter Your name"
      ></input>
    </form>
  );
}
