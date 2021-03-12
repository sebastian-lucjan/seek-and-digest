const ButtonSearch = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.type)} className="app-header__button">
        {props.text}
      </button>
    </>
  );
};

export default ButtonSearch;
