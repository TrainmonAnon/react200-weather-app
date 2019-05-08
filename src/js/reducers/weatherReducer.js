import { FETCH_WEATHER } from '../actions/types';

const initialState = {
    items: [],
    item : {
        main: {},
        wind: {}
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER:
            var history = state.items.slice(0);
            if (state.log) 
                history.push({
                    log: state.log, 
                    data: state.item
                });

            return {
                ...state,
                items: history,
                item: action.payload,
                log: {
                    loc: action.payload.name,
                    date: new Date().toLocaleDateString(), 
                    time: new Date().toLocaleTimeString()
                }
            };
        default:
            return state;
    }
};