import React from 'react'

class SearchBar extends React.Component {
    state = {
        name: '',
        category: 'films/',
        error: null,
    }

    createSearch = (name) => {
        this.setState({ name })
    }

    createCategory = (category) => {
        this.setState({ category })
    }

    handleSubmit = e => {
        e.preventDefault();
        let { name, category } = this.state;

        this.setState({error:null});

        const url = `https://swapi.co/api/${category}?search=${name}`;
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    })
                }
                return res.json()
            })
            .then(data => {
                name = '';
                this.props.addResults(data.results);
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <div>
                <form className="charsearch-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="category">category</label>
                        <select name="category" valule={this.state.category}
                            onChange={e => this.createCategory(e.target.value)}>
                            <option value="films/">Films</option>
                            <option value="people/">People</option>
                            <option value="planets/">Planets</option>
                            <option value="species/">Species</option>
                            <option value="starships/">Starships</option>
                            <option value="vehicles/">Vehicles</option>
                        </select>
                        <label htmlFor="namesearch">Search</label>
                        <input type="text" name="namesearch" 
                            placehoder="Skywalker" value={this.state.name} 
                            onChange={e => this.createSearch(e.target.value)} />
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div>
                    { this.state.error && <p>Your search returned no results. Please try again.</p>}
                </div>
            </div>
        )
    }
}

export default SearchBar;