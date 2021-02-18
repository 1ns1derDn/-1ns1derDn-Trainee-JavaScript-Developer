import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav``;

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItemStyled = styled.li`
  & + & {
    margin-left: 60px;
  }
`;

export const ListItemLinkStyled = styled(Link)`
  font-size: 18px;
  color: #000000;
  transition: color linear .3s;
  &:hover {
    color: red;
  }
`;
