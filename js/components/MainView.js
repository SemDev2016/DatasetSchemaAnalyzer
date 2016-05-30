'use strict';

import React from 'react';
import {Button, Navbar, NavBrand} from 'react-bootstrap';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar fluid={true}>
                        <NavBrand>Dataset Schema Analyzer</NavBrand>
                    </Navbar>
                </header>
                <section style={{height: '100%'}}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
