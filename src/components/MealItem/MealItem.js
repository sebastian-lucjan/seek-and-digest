import { Component } from 'react';

import styles from '../MealItem/_MealItem.module.scss';
import buttonStyles from '../Button/_Button.module.scss';
import MealImage from '../MealImage/MealImage';
// import { render } from '@testing-library/react';

class MealList extends Component {
  state = {
    mealSourceUrl: '',
    mealUrlExist: true,
  };

  componentDidMount() {
    const API_KEY = 'apiKey=9b9663f9860d49ecb19d6c46b4a974f2';
    const API_MEAL_URL = 'https://api.spoonacular.com/recipes/';
    const API_MEAL_ID = this.props.id;

    const mealRecipeUrl = API_MEAL_URL + API_MEAL_ID + '/information?' + API_KEY;

    //TODO sprawdzić czy ten adres działa czy "?" trzeba na coś zmienić
    //BRAIN działaj więcej na insomni niż bezpośrednio w przeglądarce bo szybko wytraca się limit requestów do API

    fetch(mealRecipeUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ mealSourceUrl: data.sourceUrl }));
  }

  render() {
    this.props.handleGoToSource(this.props.id);

    const { title, image: imageUrl } = this.props.meal;

    return (
      <article className={styles.meal}>
        <MealImage title={title} imageUrl={imageUrl} />
        <div className={styles.mealContent}>
          <div>{title}</div>
          <a
            href={this.state.mealSourceUrl}
            target="_blank"
            rel="noreferrer"
            className={`${buttonStyles.button} ${styles.mealLink}`}>
            more info...
          </a>
        </div>
      </article>
    );
  }
}

export default MealList;
