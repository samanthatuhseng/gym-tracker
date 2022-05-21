import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GymSession = props => (
  <tr>
    <td>{props.gymsession.username}</td>
    <td>{props.gymsession.description}</td>
    <td>{props.gymsession.duration}</td>
    <td>{props.gymsession.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.gymsession._id}>edit</Link> | <a href="#" onClick={() => { props.deleteGymSession(props.gymsession._id) }}>delete</a>
    </td>
  </tr>
)

export default class GymLog extends Component {
  constructor(props) {
    super(props);

    this.deleteGymSession = this.deleteGymSession.bind(this)

    this.state = {gymlog: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/gym-log/')
      .then(response => {
        this.setState({ gymlog: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteGymSession(id) {
    axios.delete('http://localhost:3000/gym-log/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      gymlog: this.state.gymlog.filter(el => el._id !== id)
    })
  }

  gymLog() {
    return this.state.gymlog.map(currentgymsession => {
      return <GymSession gymsession={currentgymsession} deleteGymSession={this.deleteGymSession} key={currentgymsession._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Gym Dates</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            { this.gymLog() }
          </tbody>
        </table>
      </div>
    )
  }
}