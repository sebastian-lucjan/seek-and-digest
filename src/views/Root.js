// import logo from "./assets/seek-and-digest.png";
import { Component } from 'react';
// import './App.css';
import MealItem from '../components/MealItem/MealItem';
import UserStartNav from '../components/UserStartNav/UserStartNav';
import UserSelection from '../components/UserSelection/UserSelection';
import styles from '../views/Root.module.scss';

const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'apiKey=9b9663f9860d49ecb19d6c46b4a974f2';
const API_MEAL_URL = 'https://api.spoonacular.com/recipes/';

class Root extends Component {
  state = {
    userSelection: false,
    userSelectionType: '',
    mealListActive: false,

    apiUrl: '',
    inputValue: '',
    mealsSearchedByName: null,

    isSearchRecipeClicked: false,
    // mealSourceUrl: '',
    // mealId: null,
  };

  handleSelectionClick = (type) => {
    this.setState(() => ({
      userSelection: true,
      userSelectionType: type,
    }));
  };

  handleInputValue = (e) => {
    this.setState(() => ({
      inputValue: e.target.value,
    }));
  };

  handleInputSearch = () => {
    const apiFullUrl = API_URL + '?query=' + this.state.inputValue + '&' + API_KEY;
    console.log(apiFullUrl);

    fetch(apiFullUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({ mealsSearchedByName: data.results, isSearchRecipeClicked: true }));
      });
  };

  handleGoToSource = (id) => {
    console.warn('handleShowMealInfo');
    // // https://api.spoonacular.com/recipes/642178/information?apiKey=9b9663f9860d49ecb19d6c46b4a974f2
    // const apiFullUrl = API_MEAL_URL + id + '/information?' + API_KEY;
    // console.log(apiFullUrl);

    // fetch(apiFullUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState(() => ({ mealSourceUrl: data.sourceUrl }));

    //     return fetch()
    //   });
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
            {this.state.mealsSearchedByName.map((meal) => {
              const apiFullUrl = API_MEAL_URL + meal.id + '/information?' + API_KEY;
              let mealSourceUrl = '';

              fetch(apiFullUrl)
                .then((response) => response.json())
                .then((data) => {
                  mealSourceUrl = data.sourceUrl;
                });
              console.log(mealSourceUrl);
              // fetch(apiFullUrl)
              //   .then((response) => response.json())
              //   .then((data) => {
              //     this.setState(() => ({ mealsSearchedByName: data.results, isSearchRecipeClicked: true }));
              //   });
              //TODO: take return and put inside new fetch

              return (
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  meal={meal}
                  handleGoToSource={() => this.handleGoToSource()}
                />
              );
            })}
          </section>
        ) : null}
      </div>
    );
  }
}

export default Root;
