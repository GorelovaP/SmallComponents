import React, {useEffect, useState} from "react";


type ClockPropsType = {}
export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const udInterval1 = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(udInterval1)
        } // при размонтировке произойдет удаление сайд эффекта от setInterval
    }, [])//запускаем 1 раз, т к пустой массив зависимостей

    const getRightFormat = (string: string) => string.length === 1 ? "0" + string : string

    let hours = getRightFormat(JSON.stringify(date.getHours()))
    let minutes = getRightFormat(JSON.stringify(date.getMinutes()))
    let seconds = getRightFormat(JSON.stringify(date.getSeconds()))


    return (
        <div>
            {hours + ":" + minutes + ":" + seconds}
        </div>
    )
}