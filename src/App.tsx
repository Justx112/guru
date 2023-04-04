import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icard } from './types/sharedInterface';
import { Card } from './components/card';
import { ReactComponent as Arrow } from './media/arrow.svg'
import * as Main from './styles/mainStyle'

function App() {

  const [cardArray, getCardArray] = useState<Icard[]>()
  const [showMore, setShowMore] = useState(15)

  const isAllCard = cardArray?.length && showMore <= cardArray?.length

  useEffect(() => {
    axios.get<Icard[]>('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
      .then((response) => {
        getCardArray(response.data)
      })
  }, [])

  return (
    <Main.Container>
      <Main.Header>Похожие объявления</Main.Header>
      <Main.CardContainer>
        {cardArray?.map((element: Icard, index) => {
          if (index <= showMore) {
            return (
              <Card key={element.id} {...element} />
            )
          }
        })}
      </Main.CardContainer>
      {isAllCard && <Main.ShowMore onClick={(e => { setShowMore(prev => prev + 16) })}>Показать еще{<Arrow />}</Main.ShowMore>}
      {!isAllCard && <Main.NoMoreCard >{"Больше предложений нет("}</Main.NoMoreCard>}
    </Main.Container>
  );
}

export default App;
