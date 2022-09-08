import React, {useEffect, useState} from "react";
import {DigitalClock} from "./digital/DigitalClock";
import {AnalogClock} from "./analog/AnalogClock";


type ClockPropsType = {
    mode?: "digital" | "analog"
}
export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const udInterval1 = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(udInterval1)
        } // при размонтировке произойдет удаление сайд эффекта от setInterval
    }, [])//запускаем 1 раз, т к пустой массив зависимостей


    return (
        <div>
            {props.mode === "analog" ? <DigitalClock date={date}/> :
                <AnalogClock date={date}/>}
        </div>
    )
}