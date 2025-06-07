import React from "react";

interface Task {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "white",
          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
