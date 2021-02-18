import React from 'react';
import PropTypes from 'prop-types';
import { LayoutStyled } from './Layout.styled';
import Container from '../components/Container/Container.component';

const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <Container>
                {children}
            </Container>
        </LayoutStyled>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Layout;
