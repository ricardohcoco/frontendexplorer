import React from 'react'
import { ContainerHome } from './styles'
import imageTeste from '../../assets/images/chaoutono.png'

function CardsDishes({dishes}) {
  return (
      <ContainerHome>
        <div className='refeições'>
          {dishes.map((e) => (
              <div key={e.id} className="card1">
                <img src={imageTeste} alt='image-teste' />
                <h2>{e.name}</h2>
                <p>{e.ingredients}</p>
                <span>{e.price}</span>
                <p>{e.category}</p>
              </div>
          ))}
        </div>
        </ContainerHome>
  )
}

export default CardsDishes