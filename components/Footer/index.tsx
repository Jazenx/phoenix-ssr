import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: #27282d;
  color: #848484;
  font-size: 14px;
`

const Footer: React.FC = () => {
  return <FooterWrapper>人生得意须尽欢，莫使金樽空对月。</FooterWrapper>
}

export default Footer
