import CourseCard from "./Index";

export default {
  title: "Course Card",
  component: CourseCard,
};

const course = (args) => <CourseCard />;
export const Card = course.bind({});
