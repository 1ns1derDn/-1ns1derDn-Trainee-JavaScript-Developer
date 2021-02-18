import React from 'react';
import { TableRowStyled, TableColumnStyled, TableItemIcon } from './TableItem.styled';
import PropTypes from 'prop-types';

import ArrowDown from './icons/down-chevron.svg';
import ArrowUp from './icons/up-chevron.svg';

const TableItem = ({
    exchange,
    price,
    change,
    changePercent,
    lastTradeTime,
    dividend,
    income,
    arrowPrice,
    arrowChange,
    arrowChangePercent,
    arrowDividend,
    arrowIncome,
}) => {
    return (
        <TableRowStyled>
            <TableColumnStyled>
                {exchange}
            </TableColumnStyled>
            <TableColumnStyled>
                <TableItemIcon src={arrowPrice ? ArrowDown : ArrowUp} />
                {price}{' '}$
            </TableColumnStyled>
            <TableColumnStyled>
                <TableItemIcon src={arrowChange ? ArrowDown : ArrowUp} />
                {change}
            </TableColumnStyled>
            <TableColumnStyled>
                <TableItemIcon src={arrowChangePercent ? ArrowDown : ArrowUp} />
                {changePercent}{' '}%
            </TableColumnStyled>
            <TableColumnStyled>
                {lastTradeTime}
            </TableColumnStyled>
            <TableColumnStyled>
                <TableItemIcon src={arrowDividend ? ArrowDown : ArrowUp} />
                {dividend}
            </TableColumnStyled>
            <TableColumnStyled>
                <TableItemIcon src={arrowIncome ? ArrowDown : ArrowUp} />
                {income}{' '}$
            </TableColumnStyled>
        </TableRowStyled>
    );
};

TableItem.propTypes = {
    exchange: PropTypes.string,
    price: PropTypes.number,
    change: PropTypes.number,
    changePercent: PropTypes.number,
    lastTradeTime: PropTypes.string,
    dividend: PropTypes.number,
    income: PropTypes.number,
    arrowPrice: PropTypes.bool,
    arrowChange: PropTypes.bool,
    arrowChangePercent: PropTypes.bool,
    arrowDividend: PropTypes.bool,
    arrowIncome: PropTypes.bool,
};

export default TableItem;
