import React from 'react';

function Main(props) {
    const finalResult = props.results.map((result,index) => <li key={index}>{result[Object.keys(result)[0]]}</li>)
    return (
        <div>
          <h2>Results:</h2>
          <ul>
            {finalResult}
          </ul>
        </div>
    )
}

export default Main;