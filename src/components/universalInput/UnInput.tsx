import {ChangeEvent, useState} from "react";
type UnInputType={
    callback:(title:string)=>void;
}
export const UnInput =(props:UnInputType)=>{

    let [title, setTitle] = useState("")
    const textHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value);
    }
    const buttonHandler = () =>{
       props.callback(title);
       setTitle('');
    }
    return(
        <div>
            <input value={title} onChange={textHandler}/>
            <button onClick={buttonHandler}>+</button>
        </div>
    )
}