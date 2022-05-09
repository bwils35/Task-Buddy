const Task = (props) => {
	return (
		<>
			<div className="card border border-dark mt-2">
				<div className="card-body pb-1">
					<p className="card-text">{props.taskItem}</p>
					{/* <a href="#!" class="btn btn-primary">Go somewhere</a> */}
					<button className="btn btn-danger">Delete Task</button>
				</div>
			</div>
		</>
	);
};

export default Task;
