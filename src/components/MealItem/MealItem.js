import styles from '../MealItem/_MealItem.module.scss';
import Button from '../Button/Button';
import MealImage from '../MealImage/MealImage';

const MealList = (props) => {
  const { title, image: imageUrl } = props.meal;

  return (
    <article className={styles.meal}>
      <MealImage title={title} imageUrl={imageUrl} />
      <div className={styles.mealContent}>
        <div>{title}</div>
        <Button type="recipe" text="More info..." click={props.handleShowMealInfo} />
      </div>
    </article>
  );
};

export default MealList;
