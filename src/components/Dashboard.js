import React, {Component} from 'react';
import Card from './Card.js'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="dashboard">
                <div className="card-container">
                    <Card title={"Open"} value={10}/>
                    <Card title={"In Progress"} value={10}/>
                    <Card title={"Resolved"} value={10}/>
                    <Card title={"Closed"} value={10}/>
                 </div>
            </div>
        )
    }
}

export default Dashboard;