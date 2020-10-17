import React from "react";
import CourseItem from "./CourseItem";
import withContext from "../withContext";

const CourseList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary" style={{backgroundColor: "#2BB58E"}}>
        <div className="hero-body container">
          <h4 className="title">Our Courses</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <CourseItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No Courses found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(CourseList);
