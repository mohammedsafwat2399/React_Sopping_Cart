import React from "react";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.css";
import { category } from "../../assets/data/data";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="contral-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}
function SamplePrevtArrow(props) {
  const { onClick } = props;
  return (
    <div className="contral-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}
const Category = () => {
  var Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevtArrow />,
    responsive: [
      {
        breakPoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="category">
      <div className="container">
        <Slider {...Settings}>
          {category.map((item) => (
            <div className="boxs" key={item.id}>
              <div className="box boxItems">
                <img src={item.cover} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Category;
