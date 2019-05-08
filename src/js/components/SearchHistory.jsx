import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class SearchHistory extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.newWeather) {
          
        }
    }

    render() {
        console.log(this.props.searchHistory);
        const searchItems = this.props.searchHistory.map(search => (
            <tr key={search.log.time}>
              <td>{search.log.loc}</td>
              <td>{search.log.date}</td>
              <td>{search.log.time}</td>
            </tr>
        ));

        return (
            <div className='card col-6'>
                <div className='card-header'>
                    Search History
                </div>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <tbody>
                            {searchItems}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


SearchHistory.propTypes = {
    searchHistory: PropTypes.array
};

const mapStateToProps = state => ({
    searchHistory: state.cityInfo.items,
});

export default connect(mapStateToProps, null)(SearchHistory);