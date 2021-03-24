// import logo from "./assets/seek-and-digest.png";
import { Component } from 'react';
// import './App.css';
import MealItem from '../components/MealItem/MealItem';
import UserStartNav from '../components/UserStartNav/UserStartNav';
import UserSelection from '../components/UserSelection/UserSelection';
import styles from '../views/Root.module.scss';

const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '&apiKey=9b9663f9860d49ecb19d6c46b4a974f2';

class Root extends Component {
  state = {
    userSelection: false,
    userSelectionType: '',
    mealListActive: false,

    apiUrl: '',
    inputValue: '',
    mealsSearchedByName: null,

    isSearchRecipeClicked: false,
  };

  handleSelectionClick = (type) => {
    console.log('handleSelectionClick');

    this.setState(() => ({
      userSelection: true,
      userSelectionType: type,
    }));
  };

  handleInputValue = (e) => {
    console.log(e.target.value);
    this.setState(() => ({
      inputValue: e.target.value,
    }));
  };

  handleInputSearch = () => {
    console.log('handleInputSearch');

    const apiFullUrl = API_URL + '?query=' + this.state.inputValue + API_KEY;
    console.log(apiFullUrl);

    fetch(apiFullUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({ mealsSearchedByName: data.results, isSearchRecipeClicked: true }));
      });
  };

  handleShowMealInfo = () => {
    console.warn('handleShowMealInfo');
  };

  render() {
    return (
      <div className={styles.container}>
        <UserStartNav handleSelectionClick={this.handleSelectionClick} />
        <section>
          {this.state.userSelection ? (
            <UserSelection
              type={this.state.userSelectionType}
              inputSearch={this.handleInputSearch}
              value={this.state.inputValue}
              handleInputValue={this.handleInputValue}
            />
          ) : null}
          {this.state.mealListActive ? <MealItem /> : null}
        </section>

        {this.state.isSearchRecipeClicked ? (
          <section>
            {this.state.mealsSearchedByName.map((meal) => (
              <MealItem key={meal.id} meal={meal} handleShowMealInfo={this.handleShowMealInfo} />
            ))}
          </section>
        ) : null}
      </div>
    );
  }
}

export default Root;
