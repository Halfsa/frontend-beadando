import trash from "../public/delete.png";
import {Item} from "./ItemDTO.tsx";

interface Props{
    showConfirmDelete:()=>void,
    cancelDelete:()=>void,
    performDelete:()=>void,
    item:Item,
    isAboutToBeDeleted:Item|undefined,
}
    function ItemRow(props:Props) {
    return (
        <tr key={props.item.name}>{props.item.name} {(props.item === props.isAboutToBeDeleted)? <td> <button onClick={props.performDelete}>✔️</button> <button onClick={props.cancelDelete}>✖️</button> </td>: <td><button><img style={{width:18,height:18}} src={trash} onClick={props.showConfirmDelete}/></button> </td>}</tr>
    )

}
export default ItemRow;