import styled from 'styled-components';
import { GeneralTableColumnStyled, GeneralTableRowStyled } from '../GeneralStyles.styled';

export const TableRowStyled = styled.tr`
    ${GeneralTableRowStyled};
`;

export const TableColumnStyled = styled.td`
    ${GeneralTableColumnStyled};
    position: relative;
`;

export const TableItemIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 5px;
    
    width: 18px;
    height: 12px;

    transform: translateY(-50%);
`;
