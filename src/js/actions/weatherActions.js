import { FETCH_WEATHER } from '../actions/types';

const axios = require('axios');


export const fetchWeather = query => {
    return function(dispatch){
        //get city weather from api
        axios.get(`/search/${query.cityName}`)
            .then(res => res.data)
            .then(weather => dispatch({
                type: FETCH_WEATHER,
                payload: weather
            }));
    };
}