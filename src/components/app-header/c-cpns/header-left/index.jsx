import React, { memo } from 'react'
import BnbLogo from '../../../../assets/svg/logo-svg'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <BnbLogo />
    </LeftWrapper>
  )
})

export default HeaderLeft