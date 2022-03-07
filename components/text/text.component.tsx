import * as S from "./text.style"
import { TTextProps } from "./text.definition";
import {useEffect, useState} from "react";

function Text({something} : TTextProps) {

const initialState = "This is a paragraph"
const [text, setText] = useState(initialState);
const [correctLetters, setCorrectLetters] = useState(0);
const [previousNumber, setPreviousNumber] = useState(0);


function onType(e : any){
    let x = e.key;
    if(x === "Backspace" && correctLetters > 0){
    return setCorrectLetters(correctLetters - 1);
    }

    const userText = e.target.value;

    if(userText.length === 0){
        return setCorrectLetters(0);
}
if(text[correctLetters] === userText[correctLetters]){
    setCorrectLetters(correctLetters + 1);
    setPreviousNumber(previousNumber + 1)
}
return null;
}

useEffect(()=>{
    correctLetters === text.length - 1 ? setText("Completed!") : null;
}, [correctLetters])

return(
<>
<S.TextWrapper>
<S.Text>{text}</S.Text>
<S.Input placeholder="This is where you type" maxLength={correctLetters + 1} onKeyDown={onType}></S.Input>
</S.TextWrapper>
<h1>How many have you got right?: {correctLetters}</h1>
</>
)
}

export default Text;
