const UserSelection = (props) => {
  if (props.type === 'name') {
    return (
      <>
        <label className="userSelection">
          <input
            className="userSelection__input"
            value={props.value}
            onChange={props.inputChange}
            placeholder=" e.g. pizza..."
            type="text"
          />
          <button onClick={props.inputSearch} className="userSelection__button">
            Search recipe
          </button>
        </label>
      </>
    );
  }

  return <>test</>;
};

export default UserSelection;

/*<UserSelection
              type={this.state.userSelectionType}
              inputSearch={this.handleInputSearch}
              value={this.inputValueByName}
              inputChange={this.handleInputValueByName}
            />
            */
