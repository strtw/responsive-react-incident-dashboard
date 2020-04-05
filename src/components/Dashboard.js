import React, { Component } from "react";
import Card from "./Card.js";
import DataTable from "./DataTable.js";
import IsLoading from "./IsLoading.js";
import { fetchIncidents } from "../utils/dataTransfer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      incidents: null,
      Open: null,
      "In Progress": null,
      Resolved: null,
      Closed: null,
      filteredBy: this.props.filter,
    };
    this.fetchIncidents = fetchIncidents.bind(this);
  }

  setStateCount(stateType) {
    var stateArray = this.state.incidents.filter(
      (incident) => incident.state === stateType
    );
    var length = stateArray.length;
    this.setState({ [stateType]: length });
  }

  setIncidentCountByType() {
    this.setStateCount("Open", "Open");
    this.setStateCount("In Progress", "In Progress");
    this.setStateCount("Resolved", "Resolved");
    this.setStateCount("Closed", "Closed");
  }

  handleClick(event) {
    var card = event.currentTarget.getElementsByClassName(".card");
    if (card) {
      var cardType = event.currentTarget.querySelector(".card__title")
        .innerHTML;
      this.setState({ filteredBy: cardType });
    }
  }

  filterIncidents() {
    var result;
    if (this.state.filteredBy == "All Incidents") {
      result = this.state.incidents;
    } else {
      result = this.state.incidents.filter(
        (incident) => incident.state === this.state.filteredBy
      );
    }
    return result;
  }

  componentDidMount() {
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    delay(1500).then(() => this.fetchIncidents(this.setIncidentCountByType));
  }

  render() {
    const { isLoading } = this.state;
    const loadingText = "Loading..";
    return (
      <div className="dashboard">
        <>
          {this.state.fetchError ? (
            <h1>Error fetching data, please contact site administrator</h1>
          ) : (
            <></>
          )}
        </>
        <h5 className="dashboard__subheader">At A Glance</h5>
        <div className="dashboard__cards">
          <div className="card__container">
            {isLoading ? (
              <Card title={loadingText} value={<IsLoading />} />
            ) : (
              <Card
                to={"/"}
                title={"All Incidents"}
                value={this.state.incidents.length}
                filteredBy={this.state.filteredBy}
                onClick={(event) => this.handleClick(event)}
              />
            )}
          </div>
          <div className="card__container">
            {isLoading ? (
              <Card title={loadingText} value={<IsLoading />} />
            ) : (
              <Card
                to={"/open"}
                title={"Open"}
                value={this.state["Open"]}
                filteredBy={this.state.filteredBy}
                onClick={(event) => this.handleClick(event)}
              />
            )}
          </div>
          <div className="card__container">
            {isLoading ? (
              <Card title={loadingText} value={<IsLoading />} />
            ) : (
              <Card
                to={"/in-progress"}
                title={"In Progress"}
                value={this.state["In Progress"]}
                filteredBy={this.state.filteredBy}
                onClick={(event) => this.handleClick(event)}
              />
            )}
          </div>
          <div className="card__container">
            {isLoading ? (
              <Card title={loadingText} value={<IsLoading />} />
            ) : (
              <Card
                to={"/resolved"}
                title={"Resolved"}
                value={this.state["Resolved"]}
                filteredBy={this.state.filteredBy}
                onClick={(event) => this.handleClick(event)}
              />
            )}
          </div>
          <div className="card__container">
            {isLoading ? (
              <Card title={loadingText} value={<IsLoading />} />
            ) : (
              <Card
                to={"/closed"}
                title={"Closed"}
                value={this.state["Closed"]}
                filteredBy={this.state.filteredBy}
                onClick={(event) => this.handleClick(event)}
              />
            )}
          </div>
        </div>
        <div className="data-table-container">
          {!isLoading && this.state.incidents.length == 0 ? (
            <h1>No data returned from server</h1>
          ) : (
            <></>
          )}
          {isLoading ? (
            <div className="loading-canvas">
              <IsLoading />
            </div>
          ) : (
            <>
              <h5 className="dashboard__filter-summary">
                {this.state.filteredBy}
                <span className="dashboard__filter-summary-count">
                  {this.state.filteredBy == "All Incidents"
                    ? this.state.incidents.length
                    : this.state[this.state.filteredBy]}
                </span>
              </h5>
              <div className="data-table__container">
                <DataTable
                  data={this.filterIncidents()}
                  columnMap={{
                    number: "Number",
                    priority: "Priority",
                    short_description: "Short description",
                    category: "Category",
                    state: "State",
                    sys_created_on: "Created",
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
