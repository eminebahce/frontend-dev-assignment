import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import Input from './Input';
import DropdownList from './DropdownList';
import styled, { createGlobalStyle } from 'styled-components'
import Suggestions from './Suggestions';

class SearchBox extends Component {
        state = {
            active: false,
            search: '',
            results: []
        };

    setActive = () => {
        this.setState({active: !this.state.active})
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }

    resetSearch = () => {
        this.setState({search: ''})
    }

    delayedCallBack = _.debounce(()=>{
        axios.get(`http://localhost:5000/search?q=${this.state.search}`)
            .then(response =>
                this.setState({results: response.data.suggestions.filter(searchedItem => searchedItem.searchterm.includes(this.state.search))}))
            .catch(error => console.log(error))
    }, 1000);


    render() {
        return (
                    <div data-test="search-box">
                        <form>
                        <Input className="input-field"
                               data-test="input-search"
                               type="text"
                               name="input"
                               aria-label="input search"
                               value={this.state.search}
                               onKeyUp={this.delayedCallBack}
                               onFocus={this.setActive}
                               onChange={(e) => this.handleChange(e)}
                               placeholder={this.props.placeholder}
                        />
                        {this.state.search &&
                        <button className="clear-input"
                                type="reset"
                                onClick={this.resetSearch} >
                            Clear
                        </button>}
                        <DropdownList>
                            <Suggestions suggestionsList={this.state.results}/>
                        </DropdownList>
                        </form>
                    </div>
        )
    }
}

SearchBox.propTypes = {
    setActive: PropTypes.func,
    handleChange: PropTypes.func,
    resetSearch: PropTypes.func,
    delayedCallBack: PropTypes.func
};

export default SearchBox;
