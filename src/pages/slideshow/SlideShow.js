import React from "react";
import './SlideShow.css'

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors = ["./FImg1.jpg", "./FImg2.jpg"];
const delay = 2500;
function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage:`url(${backgroundColor})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }}
          ></div>
        ))}
      </div>

      
    </div>
  );
}
export default Slideshow;