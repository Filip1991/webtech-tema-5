import React from 'react'

function SelectedTasks ({ selectedTasks }) {
	return (
		<div>
			<h3>Selected Tasks:</h3>
			<ul>
				{selectedTasks.map(task => (
					<li key={task.id}>{task.description}</li>
				))}
			</ul>
		</div>
	)
}

export default SelectedTasks
