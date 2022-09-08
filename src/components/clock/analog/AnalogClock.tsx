import s from "./AnalogClock.module.css"
import cx from 'classnames'

type AnalogClockPropsType = {
    date: Date;
}


export const AnalogClock = (props: AnalogClockPropsType) => {
    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return (<div className={s.clock}>
        Часы с модификатором аналог
        <div className={s.analogClock}>
            <div className={cx(s.dial, s.seconds)} style={secondsStyle}/>
            <div className={cx(s.dial, s.minutes)} style={minutesStyle}/>
            <div className={cx(s.dial, s.hours)} style={hoursStyle}/>
        </div>
    </div>)
}