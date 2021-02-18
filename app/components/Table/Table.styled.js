import styled, { css } from 'styled-components';
import { GeneralTableRowStyled } from './GeneralStyles.styled';

const generalStyles = css`
    padding:18px 28px 18px; 
    text-align:center; 
`;

export const TableStyled = styled.table`
    overflow:hidden;
    border:1px solid #d3d3d3;
    background:#fefefe;
    width:100%;
    border-radius:5px;
`;

export const TableColumnTitleStyled = styled.th`
    ${generalStyles};
    padding-top:22px; 
    text-shadow: 1px 1px 1px #fff;
    background:#e8eaeb;
`;

export const TableRowStyled = styled.tr`
    ${GeneralTableRowStyled};
`;

export const TableTheadStyled = styled.thead`
`;

export const TableTbodyStyled = styled.tbody`
`;
