import styled from 'styled-components'

export const ContainerFooter  = styled.footer`
  grid-area: header;
  height: 70px;
  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;