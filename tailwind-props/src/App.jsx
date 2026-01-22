import "./App.css";
import Card from "./component/Card";

function App() {
  let text = "Music lover";
  return (
    <>
      <h1 className="bg-amber-500 text-amber-800 rounded-4xl">Tailwind Test</h1>

      <Card username="Abhishek" text="Mathematics lover"></Card>
      <span>
        <Card username="ram" text={text}></Card>
        <Card></Card>
      </span>
    </>
  );
}

export default App;
