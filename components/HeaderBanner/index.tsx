import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 180px;
  width: 100%;
  background-image: url('/header-banner.png');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
`
// TODO: banner图后续可后台配置。
const HeaderBanner: React.FC = () => {
  return <BannerWrapper />
}

export default HeaderBanner
