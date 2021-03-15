// import logo from "./assets/seek-and-digest.png";
import { Component } from "react";
import "./App.css";
import MealList from "./MealList.js";
import ButtonSearch from "./ButtonSearch";
import UserSelection from "./UserSelection";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "&apiKey=9b9663f9860d49ecb19d6c46b4a974f2";

class App extends Component {
  state = {
    userSelection: false,
    userSelectionType: "",
    mealListActive: false,

    apiUrl: "",
    inputValueByName: "",
    mealsSearchedByName: null,

    isSearchRecipeClicked: false,
  };

  handleSelectionClick = (type) => {
    console.log("handleSelectionClick");

    this.setState(() => ({
      userSelection: true,
      userSelectionType: type,
    }));
  };

  handleInputValueByName = (e, inputValue) => {
    this.setState(() => ({
      inputValueByName: e.target.value,
    }));
  };

  handleInputSearch = () => {
    console.log("handleInputSearch");

    const apiFullUrl = API_URL + "?query=" + this.state.inputValueByName + API_KEY;
    console.log(apiFullUrl);

    fetch(apiFullUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({ mealsSearchedByName: data.results, isSearchRecipeClicked: true }));
      });
    // event.preventDefault();
    // this.setState(() => ({
    //   inputValueByName: this.state.inputValueByName,
    // }));
    // debugger;
  };

  render() {
    return (
      <>
        <section className="app-header">
          <h1 className="app-header__heading">Seek and Digest</h1>
          <nav className="app-header__nav">
            <h2 className="app-header__nav__heading-info">search for meals...</h2>
            <div className="app-header__nav__buttons">
              <ButtonSearch type="name" text="by name..." click={this.handleSelectionClick} />
              <ButtonSearch type="ingredients" text="by ingredients..." click={this.handleClick} />
            </div>
          </nav>
        </section>
        <section className="app-section-user-selection">
          {this.state.userSelection ? (
            <UserSelection
              type={this.state.userSelectionType}
              inputSearch={this.handleInputSearch}
              value={this.state.inputValueByName}
              inputChange={this.handleInputValueByName}
            />
          ) : null}
          {this.state.mealListActive ? <MealList /> : null}
        </section>
        {this.state.isSearchRecipeClicked ? (
          <section className="app-section-meals">
            {this.state.mealsSearchedByName.map((meal) => (
              <MealList key={meal.id} meal={meal} />
            ))}
          </section>
        ) : null}
      </>
    );
  }
}

export default App;
