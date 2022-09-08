import React, {useState} from 'react';
import './App.css';
import {Filtr} from "./components/filtering/Filtr";
import {UnInput} from "./components/universalInput/UnInput";
import {Input} from "./components/inputWithOutButton/Input";
import {UniversalButton} from "./components/inputWithOutButton/UniversalButton";
import {ItemType, Select} from "./components/selectComponent/Select";
import {Clock} from "./components/clock/Clock";


type BanknotsType = 'Dollars' | 'RUBLS'
export type FilType = BanknotsType | 'All'

export type moneyType = {
    banknots: BanknotsType;
    value: number;
    number: string;
}
let massObj: ItemType[] = [
    {
        id: "1",
        title: "Пункт 1"
    },
    {
        id: "2",
        title: "Пункт 2"
    }, {
        id: "3",
        title: "Пункт 3"
    }
]


function App() {
//типо данные,которые приходят с сервера
    const [money, setMoney] = useState<moneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilType>("All")
    const ClickHandler = (name: FilType) => {
        setFilter(name);
    }
    let currentMon = money;
    if (filter === "Dollars") {
        currentMon = money.filter(obj => obj.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMon = money.filter(obj => obj.banknots === "RUBLS")
    }

//данные для инпута(статичные)
    type MessageType = {
        message: string;
    }
    let [message, SetMessage] = useState<MessageType[]>([
        {message: "1gg"},
        {message: "2dj"},
        {message: "3gg"}
    ])

    const GetTitle = (title: string) => {
        let result = [{message: title}, ...message];
        SetMessage(result);

    }

    //для инпута и кнопки,что раздельно друг от друга
    let [title, setTitle] = useState("")
    let [message2, SetMessage2] = useState<MessageType[]>([
        {message: "1gg"},
        {message: "2dj"},
        {message: "3gg"}
    ])

    const AddTitle = () => {
        let res = [{message: title}, ...message2];
        SetMessage2(res);
        setTitle("")
    }


//для селекта
    let [titleForSelect, setTitleForSelect] = useState<any>(null)
    let SelectMemo = React.memo(Select)
    let InputMemo = React.memo(Input)
    let UnInputMemo = React.memo(UnInput)
    let UniversalButtonMemo = React.memo(UniversalButton)


    return (
        <div className="App ">
            <div>
                <h2>Фильрация по нажатию</h2>
                <Filtr data={currentMon} callback={ClickHandler}/>
            </div>
            <div>
                <h2>Универсальный input с кнопкой</h2>
                <UnInputMemo callback={GetTitle}/>
                {message.map((el, index) => {
                    return <div key={index}>{el.message}</div>
                })}
            </div>
            <div>
                <h2>Input отдельно,кнопка отдельно</h2>
                <InputMemo title={title} setTitle={setTitle}/>
                <UniversalButtonMemo callback={AddTitle} name={"+"}/>
                {message2.map((el, index) => {
                    return <div key={index}>{el.message}</div>
                })}
            </div>
            <div>
                <h2>Свой select c реагированием на нажатие кнопок</h2>
                <SelectMemo SelectedElementValue={titleForSelect} onChange={setTitleForSelect} items={massObj}/>
            </div>
            <div>
                <Clock mode={"digital"}/>
            </div>
            <div>
                <Clock mode={"analog"}/>
            </div>
        </div>

    );
}

export default App;
