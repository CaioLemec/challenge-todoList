import styles from "./TaskInfo.module.css";
import { TaskListProps } from "./TaskSection";

interface TaskInfoProps {
  taskList: TaskListProps[];
}

export function TaskInfo({ taskList }: TaskInfoProps) {
  const tasksCompleted = taskList.filter((task) => task.checked).length;

  return (
    <div className={styles.wrapper}>
      <div>
        Created Tasks<span>{taskList.length}</span>
      </div>
      <div>
        Completed Tasks
        <span>
          {taskList.length
            ? `${tasksCompleted}/${taskList.length}`
            : tasksCompleted}
        </span>
      </div>
    </div>
  );
}
