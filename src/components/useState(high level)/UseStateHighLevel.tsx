import {useState} from "react";

function generateData(){

    //!!!!!!!   difficult counting   !!!!!!!!

    console.log("generateData")
    return 2345678322;
}

export const Example1 = () => {
    console.log("Example 1");

  //  const [counter, setCounter] = useState(initNumber);// постоянно придется вызывать функцию в которой происходят ложные вычисления, можно решить 2 способами ( обернуть в useMemo(generateData, []) или передать в стейт сразу функицию useState(generateData)
    // встроенно свойство оптимизации useStata

    const [counter, setCounter] = useState(generateData)// запомнит возвращаемое значение, а не функцию! Закидывать только синхронные операции

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const Example2 = () => {
    console.log("Example 1");
    const [counter, setCounter] = useState(generateData)

    const changer = (state:number)=>{
        return state + 1
    }
    return <>
        <button onClick={() => setCounter(changer)}>+</button>//можно передвать функцию изменитель, который постоянно может изменять значение по определенному правилу
        {counter}
    </>
}