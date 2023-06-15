import React, { useEffect, useState } from 'react'
import HomeDishes from '../../components/HomeDishes/HomeDishes'
import axios from 'axios'
import CardsDishes from '../../components/CardsDishes/CardsDishes'
import { ContainerHeader } from '../../components/Header/styles'
import { Footer } from '../../components/Footer/Footer'


function Home() {

    const [dataDishes, setDataDishes] = useState([''])
    const [valueSearch, setValueSearch] = useState('')

  const fetchApi = async () => {
    const {data} = await axios.get('http://localhost:3000/dishes/')
    setDataDishes(data)
    return data
  }

  useEffect(() =>{
    fetchApi()
  },[])


  const onChangeTarget = ({target}) => {
    setValueSearch(target.value)
  }

  const teste = (valueSearch) => {
    if(valueSearch === '') {
      return dataDishes
    }

    const result = dataDishes.filter((e) => e.name.toLowerCase().includes(valueSearch.toLowerCase()) || e.ingredients.toLowerCase().includes(valueSearch.toLowerCase()) ) 
    console.log(result)
    return result
  }

  const result = teste(valueSearch) 

  const searchDrink = () => {
    const resultbebidas = dataDishes.filter((e) => e.category === "bebidas") 
    return resultbebidas
  }

  const resultbebidas = searchDrink()
  console.log(resultbebidas)

  return (
  <div>
    <ContainerHeader>
      <header className="header-container">
        <h2>food explorer</h2>
        
          <input value={valueSearch} onChange={onChangeTarget} type="text" placeholder="Busque por pratos ou ingredientes"/>
        
        <button type="submit">Sair</button>
      </header>
    </ContainerHeader>
    <div>
      <h1>Refeições</h1>
      <CardsDishes dishes={result} /></div>
    
    <div>
      <h1>Bebidas</h1>
      <CardsDishes dishes={resultbebidas} />
    </div>
    <Footer/>
  </div> 
  )
}

export default Home