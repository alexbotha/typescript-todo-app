import Header from "./components/Header";
import goat from "./assets/goat.jpg";
//import CourseGoal from "./components/CourseGoal";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description?: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description?: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: title,
        description: description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDelete(id: number) {
    const x = goals.filter((goal) => goal.id != id);
    setGoals([...x]);
  }

  return (
    <main>
      <Header image={{ src: goat, alt: "badge" }} />
      <NewGoal handleAddGoal={handleAddGoal} />
      <ul>
        <CourseGoalList goals={goals} handleDelete={handleDelete} />
      </ul>
    </main>
  );
}
