import React from 'react';
import Table from '../Table.component';
import { useSelector } from 'react-redux';


const ContainerTable = () => {
    const dataTicker = useSelector(({ stockTicker }) => stockTicker.dataTicker);
    const arrHeadTitle = [
        'exchange',
        'price',
        'change',
        'change percent',
        'last trade time',
        'dividend',
        'yield'
    ];

    return <Table headTitle={arrHeadTitle} dataTicker={dataTicker} />;
};

export default ContainerTable;
