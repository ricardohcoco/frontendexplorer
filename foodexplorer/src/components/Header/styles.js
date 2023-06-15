import styled from 'styled-components'

export const ContainerHeader  = styled.header`
.header-container {

  height: 70px;
  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  color: white;
  font-size: 24px;
  align-items: center;
}

.placeholder {
  width: 581px;
  height: 48px;
}

`;
  
