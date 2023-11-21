import styles from "./TaskSection.module.css";
import clipboardIcon from "../assets/clipboard.svg";
import { Circle, CheckCircle, Trash } from "phosphor-react";

export interface TaskListProps {
  id: number;
  content: string;
  checked: boolean;
}
interface TaskSectionProps {
  taskList: TaskListProps[];
  onCompleteTask: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

export function TaskSection({
  taskList,
  onCompleteTask,
  onRemoveTask,
}: TaskSectionProps) {
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
      {taskList.map((list: TaskListProps) => {
        const itemClass = list.checked ? styles.checked : styles.unchecked;
        return (
          <div key={list.id} className={styles.listContainer}>
            {list.checked ? (
              <CheckCircle
                onClick={() => onCompleteTask(list.id)}
                className={itemClass}
                size={18}
              />
            ) : (
              <Circle
                onClick={() => onCompleteTask(list.id)}
                className={itemClass}
                size={18}
              />
            )}
            <span className={itemClass}>{list.content}</span>
            <Trash onClick={() => onRemoveTask(list.id)} />
          </div>
        );
      })}
    </div>
  );
}
