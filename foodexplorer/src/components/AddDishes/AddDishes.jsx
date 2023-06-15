import { useState } from "react"

function AddDishes() {

  return ( 
    <div>
      <button>voltar</button>

       <h1>Adicionar Prato</h1>

        <form class="prato"> 
          <label for="image">Imagem do prato</label> 
          <input type="text" placeholder="Selecione imagem" />
          <label for="text">Nome</label>
          <input type="text" placeholder="Ex: Salada Ceaser" />
          <label for="text">Categoria</label>
          <input type="text" placeholder="Refeição" />
        </form>
          <label for="text">Ingredientes</label>
          <input type="text" placeholder="Exemplo: Pão naan" />
          <label for="text">Preço</label>
          <input type="text" placeholder="R$ 00,00" />
        <form>  
          <label for="text">Descrição</label>
          <textarea>Fale brevemente sobre o prato, ingredientes e composição</textarea>
        </form> 
        <form>  
          <button type="submit">Salvar alterações</button>
        </form>      
    </div>
    
  )
}

export default AddDishes