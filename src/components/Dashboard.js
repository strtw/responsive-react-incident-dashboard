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
            'Open':null,
            'In Progress':null,
            'Resolved':null,
            'Closed':null,
            filteredBy:"All Incidents"
        }
        this.fetchIncidents = fetchIncidents.bind(this);
    }
   
    setStateCount(stateType){
        var stateArray = this.state.incidents.filter(incident => incident.state === stateType);
        var length =  stateArray.length;
        this.setState({[stateType]:length})
    }

    setIncidentCountByType(){
        this.setStateCount('Open','Open');
        this.setStateCount('In Progress','In Progress');
        this.setStateCount('Resolved','Resolved');
        this.setStateCount('Closed','Closed');
    }

    handleClick(event){
        if(event.currentTarget.getElementsByClassName(".card")){
            var cardType = event.currentTarget.querySelector(".card__title").innerHTML;
            this.setState({filteredBy:cardType})
        }
    }

    filterIncidents(){
        var result; 
        if(this.state.filteredBy == 'All Incidents'){
            result = this.state.incidents;
        }else{
            result = this.state.incidents.filter(incident => incident.state === this.state.filteredBy);
        }
        return result;
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
                    <h5 className="dashboard__subheader">At A Glance</h5>
                    <div className="card-container">
                        <Card title={"All Incidents"} value={this.state.incidents.length} onClick={(event) => this.handleClick(event)}/>
                        <Card title={"Open"} value={this.state['Open']} onClick={(event) => this.handleClick(event)}/>
                        <Card title={"In Progress"} value={this.state['In Progress']} onClick={(event) => this.handleClick(event)}/>
                        <Card title={"Resolved"} value={this.state['Resolved']} onClick={(event) => this.handleClick(event)}/>
                        <Card title={"Closed"} value={this.state['Closed']} onClick={(event) => this.handleClick(event)}/>
                     </div>
                     <div className="data-table-container">
                         <h5 className="dashboard__filter-summary">{this.state.filteredBy}
                            <span className="dashboard__filter-summary-count">{this.state.filteredBy == "All Incidents" ? this.state.incidents.length : this.state[this.state.filteredBy]}</span>
                         </h5>
                         <div className="data-table__container">
                            <DataTable data={this.filterIncidents()}
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
                </div>
            )
        }
            
    }
}

export default Dashboard;