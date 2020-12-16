import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Navmenu from './componets/Navmenu'
import './App.css';
import Header from './componets/Header'

const App=()=>{

const[items,setItems]=useState([]);
const[isLoading,setIsLoading]=useState(true);

useEffect(()=>{
const fetchItems=async()=>{
  const results=await axios(`https://api.chucknorris.io/jokes/categories`)
  console.log(results.data)
  setItems(results.data)
  setIsLoading(false)
}
fetchItems()
},[])
  return (
    <div className="container">
      <Header/>
     <Navmenu isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
