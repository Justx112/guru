import { Icard, IcardElement } from "../types/sharedInterface"
import { ReactComponent as CarSVG } from "../media/car.svg"
import { ReactComponent as Shield } from "../media/shield.svg"
import { ReactComponent as LikeSVG } from '../media/like.svg'
import { ReactComponent as StatsSVG } from '../media/sravnit.svg'
import { ReactComponent as DotSVG } from '../media/dot.svg'
import { ReactComponent as Spinner } from '../media/loader.svg'
import { useEffect, useRef, useState } from "react"
import * as CardStyles from '../styles/cardStyle'

export function Card({ ...props }: Icard) {

  const date = new Date(props.date);
  const [countImageLoaded, OneImageLoaded] = useState(0)

  const imageDisplay = countImageLoaded === 4;

  const arrayOfImage = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null)]

  const dotArray = [
    useRef<SVGElement>(null),
    useRef<SVGElement>(null),
    useRef<SVGElement>(null),
    useRef<SVGElement>(null)]

  function strToFormat(sourceNumber: number): string {
    return String(sourceNumber).padStart(1, '0')
  }

  function formatDate(): string {
    return `${strToFormat(date.getDate())}.${strToFormat(date.getMonth()) + 1}.${strToFormat(date.getFullYear())}, ${strToFormat(date.getHours())}.${strToFormat(date.getMinutes())}`
  }

  function formatLocality(str:string):string {
    return str.length > 15 ? str.slice(0, 14) + '…' : str
  }

  function switchImage(linkImage: React.RefObject<HTMLImageElement>, linkDot: React.RefObject<SVGElement>) {
    arrayOfImage.forEach((elem) => {
      elem.current!.style.zIndex = elem === linkImage ? '2' : '1'
    })
    dotArray.forEach((elem) => {
      elem.current!.style.fill = elem === linkDot ? '#00A0AB' : '#C4C4C4';
    })
  }

  function SetColorSVG(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.currentTarget.style.fill = '#00A0AB'
  }

  function ResetColorSVG(e: React.MouseEvent<SVGElement, MouseEvent>, color: string) {
    e.currentTarget.style.fill = color
  }

  useEffect(() => {
    arrayOfImage[0].current!.style.zIndex = '1';
    dotArray.forEach((elem) => { elem.current!.style.fill = '#C4C4C4' })
    dotArray[0].current!.style.fill = '#00A0AB';
  }, [])

  return (
    <CardStyles.Container seen={props.seen}>
      <CardStyles.ImageContainer>
        <CardStyles.Seens seen={props.seen}>Просмотрено</CardStyles.Seens>
        {arrayOfImage.map((elem, index) => {
            return (<CardStyles.Image key={index} isLoaded={imageDisplay}
              ref={elem}
              onLoad={() => { OneImageLoaded(prev=> prev + 1) }}
              src={`https://source.unsplash.com/random/?Room&${props.id + index / 10}`}
              alt={`Room_photo_#${index + 1}`}
            />)
        })}
        <CardStyles.LikeWarp><LikeSVG onMouseEnter={SetColorSVG} onMouseLeave={(e: React.MouseEvent<SVGElement, MouseEvent>) => { ResetColorSVG(e, 'white') }} style={{ margin: '0 auto' }} /></CardStyles.LikeWarp>
        <CardStyles.StatWart><StatsSVG onMouseEnter={SetColorSVG} onMouseLeave={(e: React.MouseEvent<SVGElement, MouseEvent>) => { ResetColorSVG(e, 'white') }} style={{ margin: '0 auto' }} /></CardStyles.StatWart>
        <CardStyles.SpinerWrapper isLoaded={imageDisplay}><Spinner /></CardStyles.SpinerWrapper>
        <CardStyles.ImageControl isLoaded={imageDisplay} >
          {dotArray.map((elem, index) => {
            return (<DotSVG ref={elem} key={index} onClick={() => { switchImage(arrayOfImage[index], elem) }} />)
          })}
        </CardStyles.ImageControl>
      </CardStyles.ImageContainer>
      <CardStyles.MainInfo>
        <CardStyles.OldPrice>{Math.ceil(props.oldPrice)} ₽</CardStyles.OldPrice>
        <CardStyles.IconsContainer>
          <CarSVG onMouseEnter={SetColorSVG} onMouseLeave={(e: React.MouseEvent<SVGElement, MouseEvent>) => { ResetColorSVG(e, '#C7C7C7') }} style={{ margin: '0 auto' }} />
          <Shield onMouseEnter={SetColorSVG} onMouseLeave={(e: React.MouseEvent<SVGElement, MouseEvent>) => { ResetColorSVG(e, '#C7C7C7') }} style={{ margin: '0 auto' }} />
        </CardStyles.IconsContainer>
        <CardStyles.Price>{Math.ceil(props.price)} ₽</CardStyles.Price>
      </CardStyles.MainInfo>
      <CardStyles.Title>{props.title}</CardStyles.Title>
      <CardStyles.AdditionalInfo>
        <CardStyles.City>{formatLocality(props.locality)}</CardStyles.City>
        <CardStyles.Time dateTime={date.toISOString()}>{formatDate()}</CardStyles.Time>
      </CardStyles.AdditionalInfo>
    </CardStyles.Container>
  )
}

