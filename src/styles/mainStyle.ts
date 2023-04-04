import styled from "styled-components"

export const ShowMore = styled.button`
  border:none;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #00A0AB;
  height:24px;
  width:120px;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  justify-self: end;
  background-color: #ffff;
  padding: 0;
  margin-top: 16px;
  @media (max-width:600px){
    margin: 0 auto;
  }
`

export const NoMoreCard = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #8F8F8F;
  user-select: none;
  justify-self: center;
`

export const Header = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  color: #2C2C2C;
  justify-self: start;
  margin: 0 0 0 32px;
  @media (max-width:600px){
    margin: 0 auto;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 224px);
  gap: 12px;
  margin: 0 auto;
  @media (max-width:1024px){
    grid-template-columns: repeat(3, 224px);
  }
  @media (max-width:800px){
    grid-template-columns: repeat(2, 224px);
  }
  @media (max-width:600px){
    grid-template-columns: 224px;
  }
`
export const Container = styled.main`
  max-width: 932px;
  display:grid;
  grid-template-rows: 32px max-content 32px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width:1024px){
    max-width: 726px;
  }
  @media (max-width:800px){
    max-width: 600px;
  }
  @media (max-width:600px){
    max-width: 320px;
  }
`
