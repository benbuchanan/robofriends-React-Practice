import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='lightest-blue f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }

    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    };
}

export default App;
