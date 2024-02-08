import Header from "./components/Header";
import goat from "./assets/goat.jpg";
//import CourseGoal from "./components/CourseGoal";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export type CourseGoal = {
  id: number;
  title: string;
  description?: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState<CourseGoal>({
    id: 0,
    title: "",
    description: "",
  });

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

  function handleEdit(goal: CourseGoal) {
    setSelected(goal);
  }

  function handleEditSubmit(id: number, title: string, description?: string) {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, title, description } : goal
      )
    );
  }
  function renderEditForm() {
    setEdit(true);
  }

  return (
    <div className="flex items-center justify-center m-20">
      <Card
        className="w-96 flex items-center justify-center"
        placeholder={undefined}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="h-80"
          placeholder={undefined}
        >
          <Header image={{ src: goat, alt: "badge" }} />
        </CardHeader>
        <CardBody className="text-center" placeholder={undefined}>
          <NewGoal goals={goals} handleAddGoal={handleAddGoal} />

          <ul>
            <CourseGoalList
              goals={goals}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              renderEditForm={renderEditForm}
              handleEditSubmit={handleEditSubmit}
              setSelected={setSelected}
              selected={selected}
              setEdit={setEdit}
              edit={edit}
            />
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
