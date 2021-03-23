const Button = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.type)} className="app-header__button">
        {props.text}
      </button>
    </>
  );
};

export default Button;
