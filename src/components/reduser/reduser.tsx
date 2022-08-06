import {useReducer} from "react";

export type TypeOfState = {
    collapsed: boolean;
}
type TypeOfAction = {
    type: string;
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export const reduser = (state: TypeOfState, action: TypeOfAction) => {
    //редюсер принимает стейт и актион, а возвращает всегда такой же стей, как и принимал, только с измененным свойством
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const StateCopy = {
                //по признаку иммутабельности всегда нужно возвращать копию объекта
                ...state,
                collapsed: !state.collapsed
            }
            return StateCopy
        default:
            throw new Error("Ошибка типа action")
    }
}


export const PrimerComponent = () => {
//вызов редюсера
    let [collapsed, dispatch] = useReducer(reduser, {collapsed: false}) //принимает функцию, которая будет изменять
    return (
        <div>
            <div onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}>
                Нажми на меня и появится что-то
            </div>
            {collapsed.collapsed && <div>Появление при помощи редюсера</div>}
        </div>
    )

}