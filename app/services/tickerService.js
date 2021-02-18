import io from 'socket.io-client';
import { store } from '../index';
import { getDataTicker, initialState } from '../actions/actions';
let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        socket.on(stockSymbol, (body) => {
            const data = JSON.parse(body);
            store.dispatch(getDataTicker({
                ticker: data.ticker,
                exchange: data.exchange,
                price: +data.price,
                change: +data.change,
                changePercent: +data.change_percent,
                lastTradeTime: data.last_trade_time,
                dividend: +data.dividend,
                income: +data.yield
            }));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        store.dispatch(initialState());
    });
};
