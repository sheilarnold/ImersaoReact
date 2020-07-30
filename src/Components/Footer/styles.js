import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: linear-gradient(#130000, var(--black));
  border-top: 2px solid #130000;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
