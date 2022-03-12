import { TText } from "./text.definition";
import { useEffect, useState } from "react";
import * as S from "./text.style";

function Text({}: TText) {
  const [userText, setUserText] = useState([]);
  const [actualText, setActualText] = useState("");
  const [paragraph, setParagraph] = useState(
    "Hello try and type this out quick!"
  );
  const [correctLetters, setCorrectLetters] = useState(0);
  const [singleLetter, setSingleLetter] = useState("");

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

      if (e.nativeEvent.data !== " ") {
        setSingleLetter(e.nativeEvent.data);
        return;
      }
      setSingleLetter("SPACE");
    }
  }

  function reset() {
    setUserText([]);
    setCorrectLetters(0);
  }

  return (
    <>
      <S.Heading>{paragraph}</S.Heading>
      <S.Heading>{actualText}</S.Heading>
      <S.Input onChange={onType} value={userText}></S.Input>
      <S.Letter>{singleLetter}</S.Letter>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Text;
