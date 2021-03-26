import Button from '../Button/Button';
import styles from './_UserStartNav.module.scss';

const UserStartNav = (props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>Seek and Digest</h1>
      <nav className="app-header__nav">
        <h2 className={styles.headerInfo}>search for meals...</h2>
        <div className={styles.navButtons}>
          <Button type="name" text="by name..." click={props.handleSelectionClick} />
        </div>
      </nav>
    </section>
  );
};

export default UserStartNav;
