import PropTypes from "prop-types";
import CourseShow from "./CourseShow";

function CourseList({ courses }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {courses.map((course) => (
        <CourseShow key={course.name} course={course} />
      ))}
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      "course-name": PropTypes.string.isRequired,
      "course-details": PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CourseList;
