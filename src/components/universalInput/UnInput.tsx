import {ChangeEvent, useCallback, useState} from "react";

type UnInputType = {
    callback: (title: string) => void;
}
export const UnInput = (props: UnInputType) => {

    let [title, setTitle] = useState("")
    const textHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    let memoCallBackButtonHandler = useCallback(() => {
        props.callback(title);
        setTitle('');
    }, [title])

    return (
        <div>
            <input value={title} onChange={textHandler}/>
            <button onClick={memoCallBackButtonHandler}>+</button>
        </div>
    )
}