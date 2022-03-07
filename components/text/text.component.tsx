import { TTextProps } from "./text.definition";
import {useState} from "react";

function Text({something} : TTextProps) {

const initialState = "This is a paragraph that you will type out, or something!"
const [text, setText] = useState(initialState);
let number = 0;
let previousNumber = Number;

function onType(e : any){
    if(previousNumber > e.target.value.length){
        number--;
        console.log("oOdksopk")
    previousNumber = e.target.value.length;
    }

const userText = e.target.value;

if(text[number] === userText[number]){
    number++
previousNumber = e.target.value.length;
return console.log("Match!!");
}
previousNumber = e.target.value.length;
return null;

}

return(
<>
<h1>{text}</h1>
<input placeholder="This is where you type" onChange={onType}></input>
</>
)
}

export default Text;