type DigitalClockPropsType = {
    date: Date;
}


export const DigitalClock = (props: DigitalClockPropsType) => {
    const getRightFormat = (string: string) => string.length === 1 ? "0" + string : string

    let hours = getRightFormat(JSON.stringify(props.date.getHours()))
    let minutes = getRightFormat(JSON.stringify(props.date.getMinutes()))
    let seconds = getRightFormat(JSON.stringify(props.date.getSeconds()))


    return (
        <div>Часы с модификатором digital <br/>
            {hours + ":" + minutes + ":" + seconds}
        </div>
    )
}