import React, { useState } from "react";

// utilizing functional components.
const TaskInput = (props) => {
	// [local component state variable(current value), LCSV(method to set current value)]
	const [task, setTask] = useState("");
	// When submitting a task, preventDefault to bypass browser's default behavior to refresh the page
	// introduce the taskListHandler property passing the LCSV as an argument
	// reset the input back to it's default value
	const onSubmitHandler = (e) => {
		console.log(task);
		if (task.length === 0) {
			alert("Task cannot be empty!");
			return;
		}
		e.preventDefault();
		props.taskListHandler(task);
		setTask("");
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<input
				type="text"
				placeholder="Please enter a task"
				onChange={(e) => setTask(e.target.value)}
				className="form-control"
				value={task}
			/>
			<button className="btn btn-dark mt-2">Submit</button>
		</form>
	);
};

export default TaskInput;
