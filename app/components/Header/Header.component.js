import React from 'react';
import { HeaderStyled, HeaderWrapper } from './Header.styled';

import Nav from './Nav/Nav.component';
import Logotype from './Logotype/Logotype.component';
import Container from '../Container/Container.component';

const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <HeaderWrapper>
                    <Logotype />
                    <Nav />
                </HeaderWrapper>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
