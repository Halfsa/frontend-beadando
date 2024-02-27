import {Item} from "./ItemDTO.tsx";

export function getCategories(list:Item[]){
    const cats:string[] = []
    list.map((item)=>{
        if (!cats.includes(item.category)){
            cats.push(item.category);
        }
    });
    return cats;
}
