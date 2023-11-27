import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { AddTaskSection } from "./components/AddTaskSection";
import { TaskInfo } from "./components/TaskInfo";
import { TaskSection, TaskListProps } from "./components/TaskSection";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);

  const handleAddTask = (task: TaskListProps) => {
    setTaskList((prevState) => [...prevState, task]);
  };

  const handleCheckTask = (taskId: number) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTaskList(updatedTaskList);
  };

  const handleRemoveTask = (taskId: number) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <AddTaskSection onAddTask={handleAddTask} />
        <TaskInfo taskList={taskList} />
        <TaskSection
          taskList={taskList}
          onCompleteTask={handleCheckTask}
          onRemoveTask={handleRemoveTask}
        />
      </main>
    </div>
  );
}

export default App;
