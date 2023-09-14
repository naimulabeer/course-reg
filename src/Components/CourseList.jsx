import CourseShow from "./CourseShow";
import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  return (
    <div className="flex mt-10 px-4 gap-4">
      <div className="grid grid-cols-3 gap-10">
        {courses.map((course) => (
          <CourseShow key={course.name} course={course} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default CourseList;
