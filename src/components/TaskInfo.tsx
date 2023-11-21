import styles from "./TaskInfo.module.css";

export function TaskInfo() {
  return (
    <div className={styles.wrapper}>
      <div>
        Created Tasks<span>0</span>
      </div>
      <div>
        Completed Tasks<span>0</span>
      </div>
    </div>
  );
}
