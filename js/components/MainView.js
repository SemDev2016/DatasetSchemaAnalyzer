'use strict';

import React from 'react';
import {Button, Navbar, NavBrand} from 'react-bootstrap';

import Engine from '../engine/Engine';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Engine.getAllClasses();
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
					 <form>
						   <div class="form-group">
							 <label for="endpoint">SPARQL endpoint:</label>
							 <input type="TEXT" class="form-control" id="endpoint" />
						   </div>
						   <button type="submit" class="btn btn-default">Submit</button>
					 </form>    
                    {this.props.children}
                </section>
            </div>
        );
    }
}
