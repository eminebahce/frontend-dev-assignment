import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBox from '../Components/SearchBox';
import Suggestions from '../../src/Components/Suggestions';
import Input from '../../src/Components/Input';
import DropdownList from '../../src/Components/DropdownList';

storiesOf('components/searchbox', module)
    .add('empty search input', () => (
        <div data-test="search-box">
            <form>
                <Input className="input-field" valu=""/>
            </form>
        </div>
    ))
    .add('search input with value', () => (
        <div data-test="search-box">
            <form>
                <Input className="input-field" valu="trui"/>
            </form>
        </div>
    ))
    .add('search input with event handlers', () => (
        <div data-test="search-box">
            <form>
                <Input
                    onKeyUp={action('trigerred api call')}
                    onFocus={action('changed the status')}
                    onChange={action('getting the user input value')}
                />
            </form>
        </div>
    ));
storiesOf('components/suggestions', module)
    .add('showing the suggestions list', () => (
        <DropdownList>
            <Suggestions suggestionsList={[{
                "searchterm": "heren truien",
                "nrResults": 1100
            },
                {
                    "searchterm": "dames truien",
                    "nrResults": 1501
                }]}/>
        </DropdownList>
    ))