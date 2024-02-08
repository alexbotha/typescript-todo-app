import { useState } from "react";
import { CourseGoal } from "../App";
import { Button } from "@material-tailwind/react";
import EditForm from "./EditForm";

import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoal[];
  handleDelete: (id: number) => void;
  handleEdit: any;
  renderEditForm: Function;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  selected: CourseGoal;
  handleEditSubmit: (id: number, title: string, description?: string) => void;
  setEdit: any;
  edit: any;
};

export default function CourseGoalList({
  goals,
  handleDelete,
  handleEdit,
  renderEditForm,
  handleEditSubmit,
  setSelected,
  selected,
  setEdit,
  edit,
}: CourseGoalListProps) {
  const [editGoalId, setEditGoalId] = useState<number>();

  return (
    <>
      <InfoBox goals={goals} />

      {goals.map((goal) => (
        <li key={goal.id}>
          {edit && editGoalId === goal.id ? (
            <EditForm
              handleEditSubmit={handleEditSubmit}
              setSelected={setSelected}
              selected={selected}
              setEdit={setEdit}
            />
          ) : (
            <>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
              <div className="space-x-3 ">
                <Button
                  size="sm"
                  onClick={() => handleDelete(goal.id)}
                  placeholder={undefined}
                >
                  Delete
                </Button>
                <Button
                  placeholder={undefined}
                  className="shadow-inner"
                  size="sm"
                  onClick={() => {
                    handleEdit(goal);
                    renderEditForm();
                    setEditGoalId(goal.id);
                  }}
                >
                  Edit
                </Button>
              </div>
            </>
          )}
        </li>
      ))}
    </>
  );
}
