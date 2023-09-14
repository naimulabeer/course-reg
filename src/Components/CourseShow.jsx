import PropTypes from "prop-types";
import { PiCurrencyDollarBold, PiBookOpenLight } from "react-icons/pi";

function CourseShow({ course }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={course.image} alt={course["course-name"]} />
      <h2 className="font-bold">{course["course-name"]}</h2>
      <p className="text-[#1C1B1B99] ">{course["course-details"]}</p>
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center ">
          <PiCurrencyDollarBold />
          <p>Price: {course.price}</p>
        </div>

        <div className="flex gap-3 items-center ">
          <PiBookOpenLight />
          <p>Credit: {course.credit} hr</p>
        </div>
      </div>

      <button className="text-white bg-[#2F80ED] rounded-lg px-1 py-1">
        Select
      </button>
    </div>
  );
}

CourseShow.propTypes = {
  course: PropTypes.shape({
    "course-name": PropTypes.string.isRequired,
    "course-details": PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseShow;
