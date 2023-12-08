import react,{useState,useEffect} from 'react'
import { SWIGGY_URL } from '../constants'

const useRestorentList=()=>{

    const [allRestorentList,setAllRestorentList] = useState([])
    const [filtredRestorentList,setFilteredRestorentList] = useState([])
    useEffect(()=>{
        getRestaurents()
      },[])
    
    
      async function getRestaurents(){
        const data = await fetch(SWIGGY_URL)
        // console.log(await data.blob());
        const json = await data.json()
        setAllRestorentList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestorentList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      
      }

      return [allRestorentList,filtredRestorentList,setFilteredRestorentList]
}

export default useRestorentList