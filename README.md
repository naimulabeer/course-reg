# Course Registration

## Project features

This is a web application project for selecting courses from fake data. Some features are:

1. **Course Listing**: We can see nine different available courses with details such as course name, description, price, credit and image.
2. **Course Selection**: We can select courses with a Select button and also show the course name and its total cost and hours on my cart.
3. **Validation**: Courses are validated to prevent selection of courses that exceed a total of 20 credit hours. You'll receive a warning with sweet alert if you try to select too many courses. You will also be notified if a course is already added in your cart or if you exceed credit hour limits.

## How I managed the state in my assignment project:

1. **Functional Components**: Here I used functional compononets to build my application which allows me to utilize React hooks for state management.
2. **`useState` Hook**: I have used the `useState` hook to create state variables within my functional components. In my CourseList component I used courses, selectedCourse, totalCost, totalCredit, remainingCredit using `useState`.
3. **Updating State**: I have used the setter functions returned by `useState` to update the state variables. These setter functions are called with the new state value and React handles the rerendering.
4. **`useEffect` Hook**: I've used `useEffect` hook to handle side effects like fetching my fake data from an external source(a JSON file). It ensures that the data fetching and component rendering occur at the appropriate times.
