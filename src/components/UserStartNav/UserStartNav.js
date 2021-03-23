import Button from '../Button/Button';

const UserStartNav = (params) => {
  return (
    <section className="app-header">
      <h1 className="app-header__heading">Seek and Digest</h1>
      <nav className="app-header__nav">
        <h2 className="app-header__nav__heading-info">search for meals...</h2>
        <div className="app-header__nav__buttons">
          <Button type="name" text="by name..." click={this.handleSelectionClick} />
          <Button type="ingredients" text="by ingredients..." click={this.handleClick} />
        </div>
      </nav>
    </section>
  );
};

export default UserStartNav;
