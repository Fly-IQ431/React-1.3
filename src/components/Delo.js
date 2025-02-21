import React from "react";
import AddDelo from "./AddDelo";
import { FiXSquare } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

class Delo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  delo = this.props.delo;
  render() {
    return (
      <div className="delo">
        <FiXSquare
          onClick={() => this.props.onDelete(this.delo.id)}
          className="delete-icon"
        />

        <FaRegEdit
          onClick={() =>
            this.setState({
              editForm: !this.state.editForm,
            })
          }
          className="edit-icon"
        />
        <h3>{this.delo.title} </h3>
        <p>{this.delo.description}</p>
        {this.state.editForm && (
          <AddDelo delo={this.delo} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}

export default Delo;
