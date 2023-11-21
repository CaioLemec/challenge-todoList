import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { AddTaskSection } from "./components/AddTaskSection";
import { TaskInfo } from "./components/TaskInfo";
import { TaskSection } from "./components/TaskSection";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <AddTaskSection />
        <TaskInfo />
        <TaskSection />
      </main>
    </div>
  );
}

export default App;
