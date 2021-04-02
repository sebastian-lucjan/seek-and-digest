import styles from '../SearchInput/_SearchInput.module.scss';

const SearchInput = (props) => {
  return (
    <input
      className={styles.searchInput}
      value={props.value}
      onChange={props.handleInputValue}
      placeholder="e.g. pizza..."
      type="text"
    />
  );
};

export default SearchInput;
