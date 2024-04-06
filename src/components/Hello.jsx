export default function Hello({ name, message, emoji, arr }) {
  return (
    <h1>
      Hello {name}, {message}{" "}
      <img src={emoji} style={{ width: "50px", height: "50px" }} />
      {arr}
    </h1>
  );
}
