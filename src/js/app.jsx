import React from 'react';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>

        <SearchBar />

        <div className='row'>
          <CityInfo />

          <SearchHistory />
        </div>
      </div>
    );
  }
}
