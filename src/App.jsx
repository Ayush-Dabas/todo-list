import React from "react";
import { AddTasks, Heading, TaskList } from "./components/index";

const App = () => {
  return (
    <>
      <Heading />
      <AddTasks />
      <TaskList />
    </>
  );
};

export default App;
