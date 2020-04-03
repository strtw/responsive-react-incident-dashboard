import React, {Component} from 'react';

export default function Card(props){
    return(
        <div className="card" onClick={props.onClick}>
            <h6 className="card__title">{props.title}</h6>
            <hr class="card__divider"/>
            <h2 className="card__value">{props.value}</h2>
        </div>
    )
}
