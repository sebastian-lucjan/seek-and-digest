// import logo from "./assets/seek-and-digest.png";
import { Component } from "react";
import "./App.css";
import MealList from "./MealList.js";
import ButtonSearch from "./ButtonSearch";
import UserSelection from "./UserSelection";

// const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

class App extends Component {
  state = {
    userSelection: false,
    userSelectionType: "",
    mealListActive: false,
  };

  handleSelectionClick = (type) => {
    // console.log("test handleClick");

    this.setState(() => ({
      userSelection: true,
      userSelectionType: type,
    }));
  };

  render() {
    return (
      <>
        <header className="app-header">
          <h1>Seek and Digest</h1>
          <nav>
            <h2>search for meals...</h2>
            <div className="app-header__buttons">
              <ButtonSearch type="name" text="by name..." click={this.handleSelectionClick} />
              <ButtonSearch type="ingredients" text="by ingredients..." click={this.handleClick} />
            </div>
          </nav>
        </header>
        <section className="app-section-user-selection">
          {this.state.userSelection ? <UserSelection type={this.state.userSelectionType} /> : null}
          {this.state.mealListActive ? <MealList /> : null}
        </section>
        <section className="app-section-meals"></section>
      </>
    );
  }
}

export default App;
