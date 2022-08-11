import {useMemo, useState} from "react";



export const UseMemo = () => {

    let [a, setA] = useState<number>(3)
    let [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let TempResult = 1;
        for (let i = 0; i < a; i++) {

            let FAKE = 0;
            while (FAKE< 10000000){FAKE++
            const fakeVal = Math.random()} //утяжеляющая операцию, которая грузит браузер и он начинает торможить

            TempResult = TempResult * i;
        }
        return TempResult;
    }, [a]) //закеширует (меморизированный результат)


    for (let i = 0; i < b; i++) {
        resultB = resultB * i;
    }


    return (
        <div>
            <input value={a} onChange={event => setA(Number(event.currentTarget.value))}/>
            <input value={b} onChange={event => setB(Number(event.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>


    )
}