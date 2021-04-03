import styles from '../SearchInput/_SearchInput.module.scss';

const SearchInput = (props) => {
  return (
    <input
      className={styles.searchInput}
      onChange={props.handleInputValue}
      placeholder="e.g. pizza..."
      value={props.value}
      type="text"
    />
  );
};

export default SearchInput;
