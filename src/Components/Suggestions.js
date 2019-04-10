import React from 'react';

export default function Suggestions (props) {
    return(
        <ul data-test="suggestions">
            {props.suggestionsList && props.suggestionsList.map((item, i) => <li key={i}>{item.searchterm} {item.nrResults}</li>)}
        </ul>
    )
};