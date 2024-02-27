import {Item} from "./ItemDTO.tsx";
import React, {useState} from "react";
import CategoryRow from "./CategoryRow.tsx";
import ItemRow from "./ItemRow.tsx";
import SearchBar from "./SearchBar.tsx";
import {getCategories} from "./getCategories.tsx";
import NewItem from "./NewItem.tsx";

function CategoryRowFillAndClick({items}:{items:Item[]}){
    const [list,setList] = useState(items);
    const [filteredList,setFilteredList] = useState(items);
    const [isAboutToBeDeleted,setIsAboutToBeDeleted]=useState<Item>();
    const [text,setText] = useState('');
    const [hozzaadas,setHozzaadas] = useState(false);
    const [newText,setNewText] = useState('');
    const[addedItemCategory,setAddedItemCategory] = useState(getCategories(list)[0]);
    function handleNewItem(){
        setHozzaadas(true);
    }

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
        console.log(e.target.value);
    }
    function showConfirmDelete(item:Item){
        setIsAboutToBeDeleted(item)
    }
    function performDelete(item:Item){
        const Delete = list.filter((current)=>{
            return current!== item;
        })
        setList(Delete)
        setFilteredList(Delete)

    }
    function cancelDelete(){
        setIsAboutToBeDeleted(undefined)
    }

    function handleClick(category:string){
        const Update = list.filter((item)=>{
            if (category === ""){
                return item;
            }
            else if (item.category === category){
                console.log(item);
                return item;
            }
        })
        setFilteredList(Update);
    }

    function handleSelectChange(e:React.ChangeEvent<HTMLSelectElement>){
        setAddedItemCategory(e.target.value);
        console.log(e.target.value);
    }
    function handleItemAdd(){
        const updateList = list;
        if (newText.trim() ===''){
            return;
        }
        const letmeout:Item = {name:newText, category: addedItemCategory}
        updateList.push(letmeout);
        setList(updateList);
        setFilteredList(updateList);
        setHozzaadas(false);
        setAddedItemCategory(getCategories(list)[0])
    }
    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
            setNewText(e.target.value);
            console.log(e.target.value);
    }
    return(
        <div>
            {hozzaadas? <NewItem list={list} handleInput={handleInput} handleSelectChange={handleSelectChange} handleItemAdd={handleItemAdd}/>:
                <div>
                    <tr>
                        <td key={"all"}>
                            <button onClick={() => handleClick("")}>összes</button>
                        </td>
                        {getCategories(list).map((category: string) => <CategoryRow key={category} category={category}
                                                                                    handleClickCategory={() => handleClick(category)}/>)}
                    </tr>
                    <SearchBar handleChange={handleChange}/>
                    <table>
                        <tbody>
                        {filteredList.map((item) => {
                            if (item.name.trim().toLowerCase().includes(text.trim().toLowerCase())) {
                                return (
                                    <ItemRow key={item.name} showConfirmDelete={() => showConfirmDelete(item)}
                                             cancelDelete={cancelDelete} performDelete={() => performDelete(item)}
                                             item={item} isAboutToBeDeleted={isAboutToBeDeleted}/>
                                )
                            }
                        })}
                        </tbody>
                    </table>
                    <button onClick={handleNewItem}>Új hozzáadása</button>
                </div>}
        </div>
    )
}

export default CategoryRowFillAndClick;