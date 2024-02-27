function CategoryRow({category,handleClickCategory}:{category:string,handleClickCategory:()=>void}){
    return (
        <td key={category}><button onClick={handleClickCategory}>{category}</button></td>
    )
}
export default CategoryRow;