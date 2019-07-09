import React from 'react';

class SearchError extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    render() {
        if (this.state.hasError) {      
          return (
            <h2>Could not display results. Please, refresh and try again.</h2>
          );
        }
        return this.props.children;
    }  
}

export default SearchError;