import s from "./Select.module.css"
import { useState} from "react";


export type ItemType = {
    id: any;
    title: string;
}


type SelectPropsType = {
    SelectedElementValue?: any;
    onChange: (SelectedElement: any) => void;
    items: ItemType[]
}


export const Select = (props: SelectPropsType) => {
    let SelectedElement = props.items.find(el => el.title === props.SelectedElementValue)

    let [active, setActive] = useState<boolean>(false)
    let [hoveredItem, sethoveredItem] = useState<ItemType | undefined>(SelectedElement)

    const SetNewSelectedItem = (value: any) => {

        let NewSelectedElevent = props.items.find(el => el.title === value)
        NewSelectedElevent && props.onChange(NewSelectedElevent.title)
        setActive(!active)
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (hoveredItem && e.key == "Enter") {
            props.onChange(hoveredItem.title)
            setActive(!active)
            return
        }
        if (e.key == "Escape") {
            setActive(!active)
            return
        }
        if (e.key == "ArrowDown" || e.key == "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredItem && props.items[i] === hoveredItem) {
                    if (e.key == "ArrowDown") {
                        if (props.items[i + 1]) {
                            props.onChange(props.items[i + 1].title)
                            sethoveredItem(props.items[i + 1])
                            return
                        }
                    }
                    if (e.key == "ArrowUp") {
                        if (props.items[i - 1]) {
                            props.onChange(props.items[i - 1].title)
                            sethoveredItem(props.items[i - 1])
                            return
                        }
                    }
                }
                if (!hoveredItem) {
                    props.onChange(props.items[0].title)
                    sethoveredItem(props.items[0])
                }
            }
        }
    }



    return (
        <div className={s.select + " " + (active ? s.active : "")} onClick={() => {
            setActive(!active)
        }} tabIndex={0}
             onKeyUp={onKeyUp}
             onBlur={()=>setActive(false)}
        >
            <h3 className={s.h3empty}>{SelectedElement && SelectedElement.title}</h3>
            <div className={s.items}>
                {props.items.map((el, index) =>
                    <div className={s.item + " " + (hoveredItem === el ? s.selected : " ")}
                         onMouseEnter={() => sethoveredItem(el)}
                         key={index}
                         onClick={() => SetNewSelectedItem(el.title)}>{el.title}</div>)}
            </div>
        </div>
    )
}