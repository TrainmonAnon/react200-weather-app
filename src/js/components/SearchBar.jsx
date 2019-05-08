import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            cityName:'',
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newWeather) {
          
        }
    }

    onChange(e){
        this.setState({
            cityName: e.target.value,
        })
    }

    onSubmit(){
        const query = {
            cityName: this.state.cityName,
        };
      
        this.props.fetchWeather(query);
    }

    render() {
        return (
            <div className='btn-toolbar mb-3' role='toolbar' aria-label='Toolbar with button groups'>
                <div className='btn-group mr-2' role='group' aria-label='First group'>
                    <button type='button' className='btn btn-secondary' value='San Diego' onClick={(e) => this.onChange(e)}>San Diego</button>
                    <button type='button' className='btn btn-secondary' value='New York' onClick={(e) => this.onChange(e)}>New York</button>
                    <button type='button' className='btn btn-secondary' value='Washington' onClick={(e) => this.onChange(e)}>Washington D.C.</button>
                    <button type='button' className='btn btn-secondary' value='London' onClick={(e) => this.onChange(e)}>London</button>
                    <button type='button' className='btn btn-secondary' value='Tokyo' onClick={(e) => this.onChange(e)}>Tokyo</button>
                </div>
                <div className='input-group'>
                    <input
                    type='text' className='form-control' 
                    aria-label='Input group example' aria-describedby='btnGroupAddon'
                    onChange={(e) => this.onChange(e)}
                    value = {this.state.cityName}
                    />
                    <div className='input-group-append'>
                        <button className='input-group-text' id='btnGroupAddon' onClick={() => this.onSubmit()}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    fetchWeather: PropTypes.func.isRequired
};

export default connect(null, { fetchWeather })(SearchBar);
