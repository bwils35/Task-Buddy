const Task = (props) => {
	const { onDeleteTaskHandler, keyToDelete, taskItem } = props;
	return (
		<>
			<div className="card border border-dark mt-2">
				<div className="card-body pb-1">
					<p className="card-text">{taskItem}</p>
					{/* <button className="btn btn-primary p-1">Edit Task</button> */}

					<button
						onClick={() => onDeleteTaskHandler(keyToDelete)}
						className="btn btn-danger p-1"
					>
						Delete Task
					</button>
				</div>
			</div>
		</>
	);
};

export default Task;
