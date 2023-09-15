import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";
import { PiBookOpenLight, PiCurrencyDollarBold } from "react-icons/pi";
import Swal from "sweetalert2";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  const handleSelect = (course) => {
    const isExist = selectedCourse.find(
      (item) => item === course["course-name"]
    );

    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Course already added!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      if (totalCredit + course.credit > 20) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Total credits cannot exceed 20!",
        });
      } else {
        setSelectedCourse([...selectedCourse, course["course-name"]]);
        setTotalCredit(totalCredit + course.credit);
        setTotalCost(totalCost + course.price);

        const newRemainingCredits = remainingCredit - course.credit;
        if (newRemainingCredits < 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Remaining credits cannot go below 0!",
          });
        } else {
          setRemainingCredit(newRemainingCredits);
        }
      }
    }
  };

  return (
    <div className="flex mt-10 gap-12">
      <div className="grid grid-cols-3 gap-10 w-[1000px]">
        {courses.map((course) => (
          <div className="flex flex-col gap-2" key={course["course-name"]}>
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

            <button
              onClick={() => handleSelect(course)}
              className="text-white bg-[#2F80ED] rounded-lg px-1 py-1"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <div className="">
        <Cart
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
}

export default CourseList;
