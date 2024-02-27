import {getCategories} from "./getCategories.tsx";
import {Item} from "./ItemDTO.tsx";
import React from "react";

interface Props{
    list:Item[],
    handleSelectChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void,
    handleItemAdd:()=>void,
    handleInput:(e:React.ChangeEvent<HTMLInputElement>)=>void,
}
function NewItem(props:Props){
    return(
        <div>
            <input onChange={props.handleInput} type={"text"}/> <br/>
            <select onChange={props.handleSelectChange}>
                {getCategories(props.list).map((cat)=>{
                    return(
                        <option value={cat}>{cat}</option>
                    )
                })}
            </select><br/>
            <button onClick={props.handleItemAdd}>hozzáad</button>
        </div>
    )
}
export default NewItem;