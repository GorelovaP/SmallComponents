type ButtonType={
    name:string;
    callback: ()=>void;
}
export const UniversalButton = (props:ButtonType) => {
    const buttonHandler=()=>{
        props.callback();
    }
    return (
        <div>
            <button onClick={buttonHandler}>{props.name}</button>
        </div>
    )
}