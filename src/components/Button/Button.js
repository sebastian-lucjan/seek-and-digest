import styles from '../Button/_Button.module.scss';

const Button = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.type)} className={styles.button}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
