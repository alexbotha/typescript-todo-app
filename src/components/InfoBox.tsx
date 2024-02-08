import { CourseGoal } from "../App";

type InfoBoxProps = {
  goals: CourseGoal[];
};

export default function InfoBox({ goals }: InfoBoxProps) {
  if (goals.length === 0) {
    return <p>You've not set up any goals, yet.</p>;
  }

  if (goals.length >= 4) {
    return <p>Your list is getting long. Consider checking some off!</p>;
  }
}
