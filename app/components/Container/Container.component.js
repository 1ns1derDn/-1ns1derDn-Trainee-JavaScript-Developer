import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Container;
