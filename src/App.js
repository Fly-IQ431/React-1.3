import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddDelo from "./components/AddDelo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalList: [
        { id: 1, title: "Learn Html", description: "Learn basics tags" },
        { id: 2, title: "Learn Css", description: "Learn basics css" },
        { id: 3, title: "Learn JavaScript", description: "Learn basics JS" },
      ],
    };
    this.addDelo = this.addDelo.bind(this);
    this.deleteDelo = this.deleteDelo.bind(this);
    this.editDelo = this.editDelo.bind(this);
  }
  render() {
    return (
      <div>
        <Header title_site="Список дел" />
        <div className="display">
          <aside>
            <AddDelo onAdd={this.addDelo} />
          </aside>

          <main>
            <List
              goalList={this.state.goalList}
              onEdit={this.editDelo}
              onDelete={this.deleteDelo}
            />
          </main>
        </div>
      </div>
    );
  }

  deleteDelo(id) {
    this.setState({
      goalList: this.state.goalList.filter((el) => el.id !== id),
    });
  }

  editDelo(delo) {
    let allList = this.state.goalList;
    allList[delo.id - 1] = delo;

    this.setState({ goalList: [] }, () => {
      this.setState({ goalList: [...allList] });
    });
  }

  addDelo(delo) {
    const id = this.state.goalList.length + 1;
    this.setState({ goalList: [...this.state.goalList, { id, ...delo }] });
  }
}

export default App;
