import React, { Component } from 'react';
import lineImage from '../image/line.png'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img className='line-image' src={lineImage} alt="Line" />
            </div>
        );
    }
}
