import PropTypes from "prop-types";

function Cart({ selectedCourse, totalCredit, totalCost, remainingCredit }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[#2F80ED] font-semibold">
        Credit Hour Remaining {remainingCredit}
      </h1>
      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>

      <h1 className="font-semibold ">Course Name</h1>

      {selectedCourse.map((course, index) => (
        <li className="list-decimal" key={index}>
          {course}
        </li>
      ))}

      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>

      <span className=" font-medium">Total Credit Hour : {totalCredit}</span>
      <div className="bg-opacity-30 border-t-2 border-[#1C1B1B33]"></div>
      <span className="font-medium">Total Price : {totalCost} USD</span>
    </div>
  );
}

Cart.propTypes = {
  selectedCourse: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired,
};

export default Cart;
