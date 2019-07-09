import React from 'react';
import SearchBar from './component/SearchBar';
import Main from './component/Main';
import SearchError from './component/SearchError';
import ResultsError from './component/ResultsError';

class App extends React.Component {
  state = {
    results: [{name:'Your'},{name:'Results'},{name:'Here'}]
  }

  addResults = results => {
    this.setState({results})
  }

  render(){
    return (
      <main className='App'>
        <header>
          <h1>Star Wars Search!</h1>
        </header>
        <SearchError>
        <SearchBar addResults={(e) => this.addResults(e)} />
        </SearchError>
        <ResultsError>
        <Main results={this.state.results} />
        </ResultsError>
      </main>
    );
  }
}

export default App;