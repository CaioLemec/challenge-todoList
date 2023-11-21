import { useState } from "react";
import styles from "./TaskSection.module.css";
import clipboardIcon from "../assets/clipboard.svg";
import { Circle, CheckCircle, Trash } from "phosphor-react";

export function TaskSection() {
  const [taskList, setTaskList] = useState<[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const itemClass = isChecked ? styles.checked : styles.unchecked;

  return taskList.length === 0 ? (
    <div className={styles.wrapper}>
      <img src={clipboardIcon} alt="Clipboard Icon" />
      <span>
        <strong>You don't have any tasks registered yet.</strong>Create tasks
        and organize your to-do items.
      </span>
    </div>
  ) : (
    <div className={styles.wrapper}>
      {taskList.map(list => {
        return (
          <div key={list} className={styles.listContainer}>
            {isChecked ? (
              <CheckCircle className={itemClass} size={18} />
            ) : (
              <Circle className={itemClass} size={18} />
            )}
            <span className={itemClass}>Any Text</span>
            <Trash />
          </div>
        );
      })}
    </div>
  );
}
