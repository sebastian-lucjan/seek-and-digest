const UserSelection = (props) => {
  console.log(props.type);

  if (props.type === "name") {
    return (
      <>
        <label className="userSelection">
          <input placeholder="pizza, pasta... chicken lemon soup..." type="text" />
        </label>
      </>
    );
  }

  return <>test</>;
};

export default UserSelection;
