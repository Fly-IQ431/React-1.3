import React from "react";

class AddDelo extends React.Component {
  deloAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="title"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <input
          placeholder="description"
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.deloAdd = {
              title: this.state.title,
              description: this.state.description,
            };
            if (this.props.delo) this.deloAdd.id = this.props.delo.id;
            this.props.onAdd(this.deloAdd);
          }}
        >
          Add new goal
        </button>
      </form>
    );
  }
}

export default AddDelo;
