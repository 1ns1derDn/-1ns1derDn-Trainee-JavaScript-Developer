import React from 'react';
import {
    NavStyled,
    ListStyled,
    ListItemStyled,
    ListItemLinkStyled
} from './Nav.styled';

const Nav = () => {
    return (
        <NavStyled>
            <ListStyled>
                <ListItemStyled>
                    <ListItemLinkStyled to="/">
                        Table
                    </ListItemLinkStyled>
                </ListItemStyled>
                <ListItemStyled>
                    <ListItemLinkStyled to="/about">
                        About
                    </ListItemLinkStyled>
                </ListItemStyled>
            </ListStyled>
        </NavStyled>
    );
};

export default Nav;
