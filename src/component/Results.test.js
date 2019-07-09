// make React available
import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

//make the App component available
import Results from './Results';

describe('SearchBar component', () => {
//this is the test case
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');

        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<Results results={[{name:'Your'},{name:'Results'},{name:'Here'}]}  />, div);

        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Results results={[{name:'Your'},{name:'Results'},{name:'Here'}]}  />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});