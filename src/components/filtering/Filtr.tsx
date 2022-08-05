import {FilType, moneyType} from "../../App";
import s from "./Filtr.module.css"
type FiltrType={
    data: moneyType[];
    callback: (name: FilType)=>void;
}
export const Filtr = (props:FiltrType)=>{
    return(
        <div className={s.block} >
           <div>
               <h3>Список:</h3>
            <ul>
            {props.data.map((el,index)=>{
               return (
                   <li key={index}>{el.banknots} {el.number} {el.value}</li>
               )
            })}
            </ul>
               <div>
                   <button onClick={()=>{props.callback("RUBLS")}}>Рубли</button>
                   <button onClick={()=>{props.callback("Dollars")}}>Доллары</button>
                   <button onClick={()=>{props.callback("All")}}>Все</button>
               </div>
           </div>

        </div>
    )
}