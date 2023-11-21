import { useState } from "react";
import styles from "./AddTaskSection.module.css";
import { PlusCircle } from "phosphor-react";
import { TaskListProps } from "./TaskSection";

interface AddTaskSectionProps {
  onAddTask: (task: TaskListProps) => void;
}

export function AddTaskSection({ onAddTask }: AddTaskSectionProps) {
  const [taskContent, setTaskContent] = useState<string>("");
  const [taskId, setTaskId] = useState<number>(0);

  const handleAddTask = () => {
    const task = {
      id: taskId,
      content: taskContent,
      checked: false
    };
    onAddTask(task);
    setTaskId(taskId + 1);
    setTaskContent("");
  };

  const isTaskContentEmpty = taskContent.length === 0;

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Add new task"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <button
        type="submit"
        disabled={isTaskContentEmpty}
        onClick={handleAddTask}
      >
        Add <PlusCircle size={18} />
      </button>
    </div>
  );
}
