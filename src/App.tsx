import './App.css'
import CategoryRowFillAndClick from "./categoryRowFillAndClick.tsx";
import {Item} from "./ItemDTO.tsx";
const items:Item[] = [
    {
        name:"fűnyíró",
        category:"kerti eszközök",
    },
    {
        name:"kapa",
        category:"kerti eszközök",
    },
    {
        name:"T Á L",
        category:"háztartási eszközök",
    }
]
function App() {

  return(
      <div>
          <CategoryRowFillAndClick items={items}/>
      </div>
  )
}

export default App
