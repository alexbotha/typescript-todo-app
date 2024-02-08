import { useState, type FormEvent } from "react";

import { Input, Button } from "@material-tailwind/react";
import { CourseGoal } from "../App";

export type NewGoalProps = {
  handleAddGoal: (title: string, description: string) => void;
  goals: CourseGoal[];
};

export default function NewGoal({ handleAddGoal, goals }: NewGoalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //initially render useRef as null because it initially is created as HTMLINPUTELEMENT or Null and therefore without rendering it as null initially we get an error because when we create a useRef
  //hook its created as undefined - not sure I understand chatgpt answer so will confirm with Ben

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    handleAddGoal(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        crossOrigin={undefined}
        label="Your Goal"
        id="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
        aria-label="Your Goal"
      />

      <Input
        crossOrigin={undefined}
        label="Description "
        id="description"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description || ""}
        aria-label="Description" // add an aria-label if you don't want an actual label for input. This allows you to use the getByLabelText in the react testing suite
      />

      <Button
        size="sm"
        type="submit"
        placeholder={undefined}
        disabled={goals.length >= 4 && true}
      >
        Add goal
      </Button>
    </form>
  );
}
