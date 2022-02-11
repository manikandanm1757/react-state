import React from 'react';
import './Browser.css';
function Browser(props) {
    return (
        <div className="card center-align" style={{width: '300px'}}>
        <img className="card-img-top mx-auto" style={{width: '150px', height:'150px'}}
            src={props.imgUrl}
            alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
        </div>
    </div>
    );
}

export default Browser;

// {props.showVersion && <p>Version : 100</p>}
// {props.showVersion ? <p>Version : 100</p> : <p>Version not defined</p>}
// display array of value