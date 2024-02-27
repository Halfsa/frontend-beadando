interface Props{
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
}
function SearchBar(props:Props){
    return(
        <table>
            <tbody>
            <tr>
                <td>
                    <input onChange={props.handleChange} id={"searchBar"} type={"text"}
                           placeholder={"Search..."}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
export default SearchBar;