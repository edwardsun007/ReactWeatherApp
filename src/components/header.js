import React, {Component} from 'react';

const appTitle = 'React Weather App';

export default class Header extends Component{
    render(){
        return (
            <h3 className='title'>{appTitle}</h3>
        )
    }
}