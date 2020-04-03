import React, {Component} from 'react';
import Card from './Card.js'
import DataTable from './DataTable.js'
import {fetchIncidents} from '../utils/dataTransfer'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:true,
            incidents:null,
            stateOpen:null,
            stateInProgress:null,
            stateResolved:null,
            stateClosed:null
        }
        this.fetchIncidents = fetchIncidents.bind(this);
        this.setStateCount = this.setStateCount.bind(this);
    }
   
    setStateCount(stateString,stateType){
        var stateArray = this.state.incidents.filter(incident => incident.state === stateString);
        var length =  stateArray.length;
        this.setState({[stateType]:length})
    }

    setIncidentCountByType(){
        this.setStateCount('Open','stateOpen');
        this.setStateCount('In Progress','stateInProgress');
        this.setStateCount('Resolved','stateResolved');
        this.setStateCount('Closed','stateClosed');
    }

    componentDidMount(){
      this.fetchIncidents(this.setIncidentCountByType);
    }
    render(){
        if(this.state.isLoading){
           return(
             <div>Loading...</div>
           ) 
        }else{
            return(
                <div className="dashboard">
                    <div className="card-container">
                        <Card title={"Open"} value={this.state.stateOpen}/>
                        <Card title={"In Progress"} value={this.state.stateInProgress}/>
                        <Card title={"Resolved"} value={this.state.stateResolved}/>
                        <Card title={"Closed"} value={this.state.stateClosed}/>
                     </div>
                     <div className="data-table-container">
                        <DataTable data={this.state.incidents}
                            columnMap={{
                                "number":"Number",
                                "priority":"Priority",
                                "short_description":"Short description",
                                "category":"Category",
                                "state":"State",
                                "sys_created_on":"Created"
                           }}/>
                     </div>
                </div>
            )
        }
            
    }
}

export default Dashboard;