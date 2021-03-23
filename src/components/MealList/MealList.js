// import React from 'react';

const MealList = (props) => {
  const { title, image: imageUrl } = props.meal;
  // const { title, image: imageUrl, id } = props.meal;
  console.log(props);

  return (
    <article className="app-section-meals__meal">
      <div className="app-section-meals__meal__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="app-section-meals__meal__content">
        <div>{title}</div>
        <div>
          <button className="app-section-meals__meal__content__button">show recipe...</button>
        </div>
      </div>
    </article>
  );
};

export default MealList;
