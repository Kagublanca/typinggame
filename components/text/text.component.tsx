import { TText } from "./text.definition";
import { useEffect, useState } from "react";

function Text({}: TText) {
  const [userText, setUserText] = useState([]);
  const [actualText, setActualText] = useState("");
  const [paragraph, setParagraph] = useState(
    "Hello try and type this out quick!"
  );
  const [correctLetters, setCorrectLetters] = useState(0);

  useEffect(() => {
    setActualText(userText.join(""));
  }, [correctLetters]);

  function onType(e) {
    if (e.nativeEvent.data === paragraph[correctLetters]) {
      setUserText([...userText, paragraph[correctLetters]]);

      setCorrectLetters(correctLetters + 1);
      if (correctLetters === paragraph.length - 1) {
        reset();
      }
    }
  }

  function reset() {
    setUserText([]);
    setCorrectLetters(0);
  }

  return (
    <>
      <h1>{paragraph}</h1>
      <h1>{actualText}</h1>
      <input value={userText} onChange={onType}></input>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Text;
