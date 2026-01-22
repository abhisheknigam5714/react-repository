import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charachterAllowed, setCharachterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const pawsswordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx";
    if (numberAllowed) {
      string = string + "0123456789";
    }
    if (charachterAllowed) {
      string = string + "!@#$%^&*()";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password = password + string.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, charachterAllowed, setPassword]);
  useEffect(() => {
    pawsswordGenerator();
  }, [length, setNumberAllowed, setCharachterAllowed, setPassword]);

  let passwordRef = useRef(null);
  const copyOnClipboard = useCallback(() => {
    passwordRef.current?.select();
    //optional passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">Password Generator</h1>
      </div>
      <div>
        <div className=" max-w-md w-full mx-auto shadow-md rounded-lg px-8 my-4 text-orange-30 bg-blend-normal  text-black gap-1.5">
          <div>
            <input
              className="text-black border-2 border-black rounded-lg"
              type="text"
              readOnly
              value={password}
              placeholder="Password"
              ref={passwordRef}
            />
            <button
              className="bg-blue-500 rounded-lg outline-none px-3 py-0.5 shrink-0"
              onClick={copyOnClipboard}
            >
              Copy
            </button>
          </div>
          <div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input
                  type="range"
                  min={8}
                  max={120}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label>length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="NumberInput"
                  onChange={(prev) => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />

                <label htmlFor="NumberInput">Numbers</label>
              </div>

              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  id="charAllwoed"
                  defaultChecked={charachterAllowed}
                  onChange={() => {
                    setCharachterAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="charAllwoed">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
