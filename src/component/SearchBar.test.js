// make React available
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 


//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

//make the App component available
import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar component', () => {
    //this is the test case
    it('renders without crashing', () => {
    // first create a DOM element to render the component into
        const div = document.createElement('div');

        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<SearchBar addResults={(e) => this.addResults(e)} />, div);

        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<SearchBar addResults={(e) => this.addResults(e)} />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    it('calls addResults function when form is submitted', () => {
        const addResultsFn = jest.fn()
        const wrapper = mount(<SearchBar addResults={addResultsFn} />);

        wrapper.find('form').simulate('submit')
        expect(addResultsFn).toHaveBeenCalledTimes(1)
    })
});