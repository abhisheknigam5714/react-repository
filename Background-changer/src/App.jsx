import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");
  return (
    <>
      <div
        className="w-full  h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        hjjhtthh jjj
        <div className="fixed  flex justify-center flex-wrap inset-x-0 bottom-10 px-4">
          <button>red</button>
          <button>Yellow</button>
          <button>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
