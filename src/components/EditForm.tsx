import React, { useState, type FormEvent } from "react";
import { CourseGoal } from "../App";
import { Input, Button } from "@material-tailwind/react";

export type EditFormProps = {
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  selected: CourseGoal;
  handleEditSubmit: (id: number, title: string, description?: string) => void;
  setEdit: any;
};

function EditForm({ selected, handleEditSubmit, setEdit }: EditFormProps) {
  const [title, setTitle] = useState(selected.title);
  const [description, setDescription] = useState(selected?.description);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleEditSubmit(selected.id, title, description);
    setEdit(false);
  }

  return (
    <div>
      <h1>{`Edit ${selected.title}`}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          label="title "
          onChange={(e) => setTitle(e.target.value)} crossOrigin={undefined}        />

        <Input
          label="description"
          type="text"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)} crossOrigin={undefined}        />
        <Button placeholder={undefined} size="sm" type="submit">
          Submit
        </Button>
        <Button
          placeholder={undefined}
          onClick={() => setEdit(false)}
          size="sm"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default EditForm;
