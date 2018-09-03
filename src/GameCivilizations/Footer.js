import React from 'react';
import styled from 'styled-components';

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

const Footer = () => (
  <FooterContainer>
    <p>
      Developed by{' '}
      <a href="https://www.voobly.com/profile/view/55725">[EoK]_OrO_</a>
      <br />
      Anything wrong, please let me know. <br />
      <a href="http://twitter.com/jessemezini">Twitter (DM open)</a> -{' '}
      <a href="http://facebook.com/jessemezini">Facebook</a>
    </p>
  </FooterContainer>
);

export default Footer;
