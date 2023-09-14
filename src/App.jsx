import CourseList from "./Components/CourseList";
import data from "./data.json";

function App() {
  return (
    <>
      <h1 className="text-2xl text-[#1C1B1B] font-bold text-center">
        Course Registration
      </h1>
      <CourseList courses={data} />
    </>
  );
}

export default App;
