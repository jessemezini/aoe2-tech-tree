import React from 'react';
import styled from 'styled-components';

// #region Styles
const FooterContainer = styled.div`
  display: flex;
  margin-top: auto;

  p {
    font-size: 12px;
  }

  a {
    color: #111111;
  }
`;
// #endregion

const Footer = () => (
  <FooterContainer>
    <p>
      Developed by [EoK]_OrO_ (
      <a href="http://twitter.com/jessemezini">Twitter</a> or{' '}
      <a href="http://facebook.com/jessemezini">Facebook</a>) <br />
      Current version: WololoKingdoms 5.8.1.
    </p>
  </FooterContainer>
);

export default Footer;
