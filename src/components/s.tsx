import React, {useMemo, useState} from 'react'

type ButtonType = {
    id: number
    title: string
    forAdminOnly: boolean
}
const buttons: ButtonType[] = [
    {id: 1, title: 'delete', forAdminOnly: true},
    {id: 2, title: 'update', forAdminOnly: true},
    {id: 3, title: 'create', forAdminOnly: false},
]

export const Tsx = ({isAdmin}: { isAdmin: boolean }) => {

    const [seconds, setSeconds] = useState(0)

    const increaseSeconds = () => setSeconds(seconds + 10)

    const correctButtons = useMemo(() => {
        return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
    }, [isAdmin])

    return <>
        <ButtonsPanel buttons={correctButtons}/>
        <div>
            <p>
                <b>Секунды: {seconds}</b>
            </p>
            <button onClick={increaseSeconds}>
                Увеличить на 10 секунд
            </button>
        </div>
    </>
}

const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
    console.log('Render ButtonsPanel')
    return (
        <div style={{marginBottom: '15px'}}>
            <div style={{marginBottom: '15px'}}>
                <b>Панель с кнопками</b>
            </div>
            <div>
                {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
            </div>
        </div>
    )
})



