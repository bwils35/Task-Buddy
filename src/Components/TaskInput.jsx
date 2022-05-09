import React, { useState } from "react";

// utilizing functional components.
const TaskInput = (props) => {
	// [local component state variable(getter),LCSV(setter)]
	const [task, setTask] = useState("");
	const onSubmitHandler = (e) => {
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
