import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'jetswap-uikit-new'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 39px;
`

const IfoTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const { isDark } = useTheme()
  const textColor = isDark ? '' : '#2A2A2A'
  const { t } = useTranslation()

  return (
    <Wrapper>
      <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`} style={{ borderRadius: '30px', color: textColor }}>
          {t('Next IJO')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`} style={{ borderRadius: '30px', color: textColor }}>
          {t('Past IJOs')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default IfoTabButtons
