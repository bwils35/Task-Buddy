import logo from "./logo.svg";
import "./App.css";
import TaskInput from "./Components/TaskInput";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Components/Task";

function App() {
	const [taskList, setTaskList] = useState([]);
	const onSetTaskList = (task) => {
		// ... is a rest/spread operator
		setTaskList([...taskList, task]);
	};
	return (
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6">
				<div className="App">
					<h1>TODO List</h1>
					<TaskInput taskListHandler={onSetTaskList} />
					{/* <Task taskItem={}/> */}
					{taskList.map((task, index) => (
						<Task taskItem={task} key={index} />
					))}
				</div>
			</div>
			<div className="col-md-3"></div>
		</div>
	);
}

export default App;
