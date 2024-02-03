import { CourseGoal } from "../App";

type CourseGoalListProps = {
  goals: CourseGoal[];
  handleDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  handleDelete,
}: CourseGoalListProps) {
  return (
    <>
      {goals.map((goal) => (
        <li key={goal.id}>
          <h2>{goal.title}</h2>
          <p>{goal?.description}</p>
          <button onClick={() => handleDelete(goal.id)}>Delete</button>
        </li>
      ))}
    </>
  );
}
