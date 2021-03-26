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

  componentDidUpdate() {  
    if(this.state.mealUrlExist){
console.log("test");
    }
    // onClick={() => this.props.handleGoToSource(this.props.id)}
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
