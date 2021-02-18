import React from 'react';
import {
    TableStyled,
    TableRowStyled,
    TableColumnTitleStyled,
    TableTheadStyled,
    TableTbodyStyled
} from './Table.styled';
import PropTypes from 'prop-types';

import TableItem from './TableItem/TableItem.component';

const Table = ({ dataTicker, headTitle }) => {
    return (
        <TableStyled>
            <TableTheadStyled>
                <TableRowStyled>
                    {
                        headTitle.map(title => {
                            return (
                                <TableColumnTitleStyled key={title}>
                                    {title}
                                </TableColumnTitleStyled>
                            );
                        })
                    }
                </TableRowStyled>
            </TableTheadStyled>
            <TableTbodyStyled>
                {
                    dataTicker.map((data, index, arr) => {
                        const {
                            exchange,
                            price,
                            change,
                            changePercent,
                            lastTradeTime,
                            dividend,
                            income } = data;

                        const prevData = arr[index === 0 ? 0 : index - 1];

                        const arrowPrice = prevData?.price >= price ? true : false;
                        const arrowChange = prevData?.change >= change ? true : false;
                        const arrowChangePercent = prevData?.changePercent >= changePercent ? true : false;
                        const arrowDividend = prevData?.dividend >= dividend ? true : false;
                        const arrowIncome = prevData?.income >= income ? true : false;

                        return (
                            <TableItem
                                key={index}
                                exchange={exchange}
                                price={price}
                                change={change}
                                changePercent={changePercent}
                                lastTradeTime={lastTradeTime}
                                dividend={dividend}
                                income={income}
                                arrowPrice={arrowPrice}
                                arrowChange={arrowChange}
                                arrowChangePercent={arrowChangePercent}
                                arrowDividend={arrowDividend}
                                arrowIncome={arrowIncome}
                            />
                        );
                    })
                }
            </TableTbodyStyled>
        </TableStyled>
    );
};

Table.propTypes = {
    headTitle: PropTypes.array,
    dataTicker: PropTypes.array
};

export default Table;
