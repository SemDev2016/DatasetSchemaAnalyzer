'use strict';

import React from 'react';
import {Button, Navbar, NavBrand} from 'react-bootstrap';
import request from 'superagent';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getAllClasses();
    }

    getAllClasses() {
        var query = 'SELECT DISTINCT ?x WHERE {'
        + '?y rdf:type ?x'
        + '}';
        request.get('http://dbpedia.org/sparql?query=' + encodeURIComponent(query)).accept('json').end(function (err, resp) {
            if (!err) {
                console.log(resp.body);
            }
        });
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
