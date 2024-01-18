import React,{useState} from "react"
import useLocalStorage from "./useStorage";

function InputField(){

    // let [InputFieldValue, setInputFieldValue]=useState("")
    let [value,updateValue]=useLocalStorage("inputData")

    function savingInputValues(e){
        let data=e.target.value;
        updateValue(data)

    }
    console.log("value",value)
    return (
        <>
        <div>
            <input type="text"
            placeholder="Type here"
            onChange={savingInputValues}
             />
             {/* <h3>data that is getting stored : {}</h3> */}
        </div>
        </>
    )
}
export default InputField;