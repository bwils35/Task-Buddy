import "./App.css";
import TaskInput from "./Components/TaskInput";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Components/Task";

function App() {
	// alter the initial state to be a function that will only execute on initial render.
	const [taskList, setTaskList] = useState(() => {
		// get the list from localStorage
		const saved = localStorage.getItem("taskList");
		// if there are tasks stored, return the parsed JSON object
		return JSON.parse(saved) || [];
	});
	const onSetTaskList = (task) => {
		// ... is a rest/spread operator
		setTaskList([...taskList, task]);
	};
	// useEffect runs side effects once the component mounts.
	useEffect(() => {
		// if there are any elements in taskList,
		if (taskList.length !== 0 || taskList[0] !== "") {
			// convert the object into a string and store it.
			localStorage.setItem("taskList", JSON.stringify(taskList));
		}
		// add the taskList dependency to update localState any time the taskList state changes.
	}, [taskList]);
	const onDeleteTask = (id) => {
		let alteredList = [...taskList];
		alteredList.splice(id, 1);
		setTaskList(alteredList);
	};
	return (
		<div className="row">
			<div className="col-md-3" />
			<div className="col-md-6">
				<div className="App">
					<h1>TaskList</h1>
					<TaskInput taskListHandler={onSetTaskList} />
					{taskList.map((task, index) => (
						<Task
							taskItem={task}
							key={index}
							keyToDelete={index}
							onDeleteTaskHandler={onDeleteTask}
						/>
					))}
				</div>
			</div>
			<div className="col-md-3" />
		</div>
	);
}

export default App;
