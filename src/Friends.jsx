import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
    </tr>
  );
};

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow:[] };
  }

  componentDidMount() {
    this.props.function().then((users) => {
      console.log(users);
      let usersCount = users.length;
      let userRow = [];

      for (let i = 0; i < usersCount; i++) {
        userRow.push(
          <TableRow
            id={users[i].id}
            index={i}
            key={i}
            name={users[i].name}
            lastname={users[i].lastname}
          />
        );
      }
      this.setState({userRow: userRow});
    });
  }

  render() {
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Имя и Фаммилия</th>
            </tr>
          </thead>
          <tbody>{this.state.userRow}</tbody>
        </table>
      </div>
    );
  }
}

export default Friends;
