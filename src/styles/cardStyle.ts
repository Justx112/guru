import styled, { keyframes } from "styled-components"
import { Icard, Iimage } from "../types/sharedInterface"

export const Container = styled.div<Pick<Icard, 'seen'>>`
  width: 224px;
  display:flex;
  background-color: #f06b6b;
  border-radius: 8px;
  flex-direction: column;
  padding:0 12px 12px 12px;
  box-sizing: border-box;
  position: relative;
  background-color: ${(p) => p.seen ? '#FFF6A5' : 'white'};
`

export const OldPrice = styled.s`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5A5A5A;
`

export const Price = styled.strong`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-size: 22px;
  line-height: 25px;
  color: #2C2C2C;
  margin-left: 0px;
  width:100%;
`

export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #2C2C2C;
  margin-top: 8px;
  margin-bottom: 14px;
`

export const City = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #8F8F8F;
  display: inline-block;
  width: max-content;
  margin:0;
`
export const ImageContainer = styled.div`
  width:200px;
  height:260px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Time = styled.time`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #8F8F8F;
  display: inline-block;
  width: max-content;
  margin:0;
`
export const Image = styled.img<Iimage>`
  width: 224px;
  height: 260px;
  border-radius: 8px 8px 0 0;
  position:absolute;
  left: 0;
  display:${(p) => p.isLoaded ? 'block' : 'none'};
`
export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 200px;
  margin-top: 2px;
`

export const IconsContainer = styled.div`
  display:grid;
  grid-template-columns: 24px 24px;
  grid-template-rows: 24px;
  column-gap: 14px;
  align-items: center;
  justify-content: center;
`

export const SvgWarper = styled.div`
  position: absolute;
  z-index: 9999;
  cursor: pointer;
`

export const LikeWarp = styled(SvgWarper)`
  top:205px;
  right:12px;
  width:24px;
  height:24px;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const StatWart = styled(SvgWarper)`
  top:166px;
  right:12px;
  width:24px;
  height:24px;
`

export const ImageControl = styled(SvgWarper) <Iimage>`
  display: ${(p) => p.isLoaded ? 'grid' : 'none'};
  grid-auto-flow:column;
  grid-template-columns: repeat(4, 8px);
  column-gap: 8px;
  top: 248px;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Seens = styled.div<Pick<Icard, 'seen'>>`
  position: absolute;
  top:17px;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
  z-index: 9999;
  background: rgba(44, 44, 44, 0.74);
  border-radius: 8px;
  padding: 5px 8px;
  box-sizing: border-box;
  display: ${p => p.seen ? 'display' : 'none'};
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SpinerWrapper = styled.div<Iimage>`
  position: relative;
  width: 64px; 
  height: 64px;
  z-index: 9999;
  display: ${(p) => p.isLoaded ? 'none' : 'block'};
  animation: ${rotate} 1s linear infinite;
`

