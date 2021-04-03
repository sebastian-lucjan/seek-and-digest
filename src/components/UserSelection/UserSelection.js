import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import styles from './_UserSelection.module.scss';

const UserSelection = ({ type, value, inputSearch, handleInputValue }) => {
  if (type === 'name') {
    return (
      <>
        <label className={styles.userSelection}>
          <SearchInput handleInputValue={handleInputValue} value={value} />
          <Button type="name" text="Search recipes" click={inputSearch} />
        </label>
      </>
    );
  }

  return <>test</>;
};

export default UserSelection;
