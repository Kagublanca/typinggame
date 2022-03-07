import * as S from "./text.style"
import { TTextProps } from "./text.definition";
import {useEffect, useState} from "react";

function Text({something} : TTextProps) {

const initialState = "This is a paragraph"
const [text, setText] = useState(initialState);
const [number, setNumber] = useState(0);

let previousNumber = Number;

function onType(e : any){
    console.log(number)
    if(previousNumber > e.target.value.length && number > 1){
        console.log("BACKSPACE [[[[" + number, "color: orange")
    }
    if(previousNumber > e.target.value.length && number < 1){
        setNumber(0);
    }

const userText = e.target.value;

if(text[number] === userText[number]){
    setNumber(number + 1);
previousNumber = e.target.value.length;
return console.log("Match!!");
}
previousNumber = e.target.value.length;
return null;

}

useEffect(()=>{
    number === text.length ? setText("Completed!") : null;
}, [number])

return(
<>
<S.TextWrapper>
<S.Text>{text}</S.Text>
<S.Input placeholder="This is where you type" maxLength={number + 1} onChange={onType}></S.Input>
</S.TextWrapper>
</>
)
}

export default Text;
