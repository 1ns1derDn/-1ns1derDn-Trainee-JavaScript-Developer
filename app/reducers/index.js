import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { actions } from '../actions/actions';

const stateStockTicker = {
    dataTicker: [],
};

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = stateStockTicker, action) => {
        switch (action.type) {
            case actions.GET_DATA_TICKER:
                return { ...state, dataTicker: [...state.dataTicker, action.payload] };

            case  actions.INITIAL_STATE:
                return stateStockTicker;

            default:
                return state;
        }
    }
});

export default createRootReducer;
