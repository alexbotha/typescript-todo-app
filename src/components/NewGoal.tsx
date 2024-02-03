import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  handleAddGoal: (title: string, description: string) => void;
  //when using functions as types we want to return a void given we don't actually expect it to return anything
};

export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  //initially render useRef as null because it initially is created as HTMLINPUTELEMENT or Null and therefore without rendering it as null initially we get an error because when we create a useRef hook its created as undefined - not sure I understand chatgpt answer so will confirm with Ben

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const enteredTitle = title.current!.value;
    //bang operator tels TS that title.current will never be null because it only runs after we've submitted our form
    //property "value" does not exis on type never - we use the achor brackets to tell useRef the type for our value on our title object will be an input element as shown in our const description declaration

    const enteredDescription = description.current!.value;
    handleAddGoal(enteredTitle, enteredDescription);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your goal </label>
        <input id="title" type="text" ref={title} required />
      </p>
      <p>
        <label htmlFor="description">Description </label>
        <input id="description" type="text" ref={description} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
