import styles from "./AddTaskSection.module.css";
import { PlusCircle } from "phosphor-react";

export function AddTaskSection() {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Add new task" />
      <button type="submit">
        Add <PlusCircle size={18} />
      </button>
    </div>
  );
}
