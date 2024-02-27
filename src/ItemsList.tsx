import {useState} from "react";
import {Item} from "./ItemDTO.tsx";
import ItemRow from "./ItemRow.tsx";

function ItemsList({incomingList}:{incomingList:Item[]}){
    const [isAboutToBeDeleted,setIsAboutToBeDeleted]=useState<Item>();
    const [list,setList] = useState(incomingList);
    console.log(list);
    function showConfirmDelete(item:Item){
        setIsAboutToBeDeleted(item)
    }
    function performDelete(item:Item){
        setList(list.filter((current)=>{
            return current!== item;
        }))

    }
    function cancelDelete(){
        setIsAboutToBeDeleted(undefined)
    }

    return(
        <table>
            <tbody>
                {list.map((item)=><ItemRow showConfirmDelete={()=>showConfirmDelete(item)} cancelDelete={cancelDelete} performDelete={()=>performDelete(item)} item={item} isAboutToBeDeleted={isAboutToBeDeleted}/>)}
            </tbody>
        </table>
    )

}
export default ItemsList;