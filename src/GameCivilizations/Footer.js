import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  margin-top: auto;

  a {
    color: #111111;
  }
`;

const Footer = () => (
  <FooterContainer>
    <small>
      Developed by{' '}
      <a href="https://www.voobly.com/profile/view/55725">[EoK]_OrO_</a>
      <br />
      If you find anything wrong, please let me know.{' '}
      <a href="http://twitter.com/jessemezini">Twitter (DM open)</a> -{' '}
      <a href="http://facebook.com/jessemezini">Facebook</a>
    </small>
  </FooterContainer>
);

export default Footer;
