import PropTypes from "prop-types";

function CourseShow({ course }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={course.image} alt={course["course-name"]} />
      <h2>{course["course-name"]}</h2>
      <p>{course["course-details"]}</p>
      <p>Price: ${course.price}</p>
      <p>Credit: {course.credit} credits</p>
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
