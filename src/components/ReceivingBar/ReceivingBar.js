import { useState, useEffect } from 'react'
import * as S from './ReceivingBarStyle'

const ReceivingBar = function({ institutionName, amount, tax }) {
  return (
    <div>
      <S.TextContainer>
        <p>{ institutionName }</p>
        <S.DescriptionDiv>
          <span>Você recebe</span>
          <span>Taxas</span>
        </S.DescriptionDiv>
      </S.TextContainer>

      <S.Container>
        <S.AmountBar tax={ tax }>
          USD { amount.toFixed(2).replace('.', ',') }
        </S.AmountBar>
        <S.TaxBar tax={ tax }>
          { (tax * 100).toFixed(0) }%
        </S.TaxBar>
      </S.Container>
    </div>
  )

}

export default ReceivingBar;