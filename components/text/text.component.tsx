import { TText } from "./text.definition";
import { useEffect, useState } from "react";
import * as S from "./text.style";

function Text({}: TText) {
  const [userText, setUserText] = useState([]);
  const [actualText, setActualText] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [correctLetters, setCorrectLetters] = useState(0);
  const [singleLetter, setSingleLetter] = useState("");

  //Make a fetch request here to an API which houses some trivia?
  //Possibly keep this in the backend database if needed.
  const paragraphList = [
    "This is para one",
    "This is para two",
    "This is para three",
  ];

  useEffect(() => {
    setActualText(userText.join(""));
  }, [correctLetters]);

  function onType(e) {
    if (e.nativeEvent.data !== " ") {
      setSingleLetter(e.nativeEvent.data);
    } else {
      setSingleLetter("SPACE");
    }
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
    setSingleLetter("");
  }

  function fetchNewParagraph() {
    const randomNumber = Math.floor(Math.random() * 3);
    setParagraph(paragraphList[randomNumber]);
  }

  return (
    <>
      <S.Heading>{paragraph}</S.Heading>
      <S.Heading>{actualText}</S.Heading>
      <S.Input onChange={onType} value={userText}></S.Input>
      <S.Letter>{singleLetter}</S.Letter>
      <button onClick={reset}>Reset</button>
      <button onClick={fetchNewParagraph}>
        Click to fetch a new paragraph
      </button>
    </>
  );
}

export default Text;
