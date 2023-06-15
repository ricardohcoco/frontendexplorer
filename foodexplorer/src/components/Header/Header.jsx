import { ContainerHeader } from "./styles";

export function HeaderComponent({dataDishes}) {
  return(
    <ContainerHeader>
      <header className="header-container">
        <h2>food explorer</h2>
        
          <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        
        <button type="submit">Sair</button>
      </header>
    </ContainerHeader>
  )
}