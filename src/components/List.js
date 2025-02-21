import React from "react";
import Delo from "./Delo";

class List extends React.Component {
  render() {
    if (this.props.goalList.length > 0)
      return (
        <div className="main_delo">
          {this.props.goalList.map((el) => (
            <Delo
              onEdit={this.props.onEdit}
              onDelete={this.props.onDelete}
              key={el.id}
              delo={el}
            />
          ))}
        </div>
      );
    else
      return (
        <div className="delo">
          <h3>Список пуст</h3>
        </div>
      );
  }
}

export default List;
