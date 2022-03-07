import { TTextProps } from "./text.definition";
import {useState} from "react";

function Text({something} : TTextProps) {

const initialState = "This is a paragraph that you will type out, or something!"
const [text, setText] = useState(initialState);

return(
<>
<h1>{text}</h1>
<input placeholder="This is where you type"></input>
</>
)
}

export default Text;