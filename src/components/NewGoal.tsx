import { type FormEvent } from "react";

export default function NewGoal() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your goal</label>
        <input id="title" type="text" />
      </p>
      <p>
        <label htmlFor="description"> description</label>
        <input id="description" type="text" />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
