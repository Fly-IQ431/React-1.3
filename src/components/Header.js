import React from "react";

class Header extends React.Component {
  render() {
    return <header className="header">{this.props.title_site}</header>;
  }
}

export default Header;
