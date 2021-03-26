import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import styles from './_UserSelection.module.scss';

const UserSelection = (props) => {
  if (props.type === 'name') {
    return (
      <>
        <label className={styles.userSelection}>
          <SearchInput handleInputValue={props.handleInputValue} />
          <Button type="name" text="Search recipes" click={props.inputSearch} />
        </label>
      </>
    );
  }

  return <>test</>;
};

export default UserSelection;
