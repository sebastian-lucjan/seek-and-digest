import styles from '../MealImage/_MealImage.module.scss';

const MealImage = (props) => {
  return (
    <div className={styles.mealImageContainer}>
      <img className={styles.mealImage} src={props.imageUrl} alt={props.title} />
    </div>
  );
};
export default MealImage;
