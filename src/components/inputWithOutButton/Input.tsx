import {ChangeEvent} from "react";

type setTitle={
    title: string;
    setTitle:(title:string)=>void
}


export const Input =(props:setTitle)=>{
    const textHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.setTitle(event.currentTarget.value);
    }
    return(
        <div>
            <input value={props.title} onChange={textHandler}/>
        </div>
    )
}