/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Cart({ selectedCourse, totalCredit, totalCost }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[#2F80ED] font-semibold">
        Credit Hour Remaining 7 hr
      </h1>
      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>

      <h1 className="font-semibold ">Course Name</h1>

      {selectedCourse.map((course, index) => (
        <li className="list-decimal" key={index}>
          {course}
        </li>
      ))}

      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>

      <span>Total Credit Hour : {totalCredit}</span>
      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>
      <span>Total Price : {totalCost}</span>
    </div>
  );
}

export default Cart;
