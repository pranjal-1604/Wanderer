import React from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import './header.css'
import Travel from '../../assets/travel.png'

function Header() {
    return (
        <div className='navigation'>
            <div className='heading'>
                <img
                    src={Travel}
                    width="30"
                    height="30"
                    className="d-inline-block ml-2 align-top"
                    alt="Travel logo"
                />
            <h3 className='d-inline-block ml-2'>Travel Advisor</h3>
            </div>
            <InputGroup className='search-bar'>
                <span className="input-group-prepend">
                    <div className="input-group-text bg-transparent border-right-0"><i className="fa fa-search"></i></div>
                </span>
                <input className="form-control py-2 border-left-0 border" type="search" placeholder="Search places.." />
                <span className="input-group-append">
                    <Button className="border-left-0 border" style={{ backgroundColor: '#D5BFBF', color: '#316B83' }} type="submit">
                        Search
                    </Button>
                </span>
            </InputGroup> 
        </div>
    )
}

export default Header
