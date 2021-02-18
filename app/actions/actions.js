export const actions = {
    GET_DATA_TICKER: 'GET_DATA_TICKER',
    INITIAL_STATE: 'INITIAL_STATE'
};

export const getDataTicker = (dataTicker) => ({
    type: 'GET_DATA_TICKER',
    payload: dataTicker
});

export const initialState = () => ({
    type: 'GET_DATA_TICKER',
});
