import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';


class CityInfo extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.newWeather) {
          
        }
    }

    render() {
        console.log(this.props.cityInfo);
        return (
        <div className='card col-6'>
            <div className='card-header'>
                City Information
            </div>
            <div className='card-body text-center'>
                <h4 className='card-title'>{this.props.cityInfo.name || 'City Name'}</h4>
                <div className='row'>
                    <div className='col'>
                        <p className='card-text'>Temperature (F)</p>
                        <p className='card-text'>{this.props.cityInfo.main.temp || '98.60F'}</p>
                    </div>
                    <div className='col'>
                        <p className='card-text'>Pressure</p>
                        <p className='card-text'>{this.props.cityInfo.main.pressure || '1000'}</p>
                    </div>
                    <div className='col'>
                        <p className='card-text'>Humidity</p>
                        <p className='card-text'>{this.props.cityInfo.main.humidity || '0%'}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='card-text'>Lowest Temp (F)</p>
                        <p className='card-text'>{this.props.cityInfo.main.temp_min || '0.00F'}</p>
                    </div>
                    <div className='col'>
                        <p className='card-text'>Highest Temp (F)</p>
                        <p className='card-text'>{this.props.cityInfo.main.temp_max || '100.00F'}</p>
                    </div>
                    <div className='col'>
                        <p className='card-text'>Wind Speed</p>
                        <p className='card-text'>{this.props.cityInfo.wind.speed || '0.00mph'}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


CityInfo.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    cityInfo: PropTypes.object
};

const mapStateToProps = state => ({
    cityInfo: state.cityInfo.item,
});

export default connect(mapStateToProps, { fetchWeather })(CityInfo);