import React, { useState, useEffect } from 'react'
import store from '../stores/TaskStore'
import Task from './Task'
import SelectedTasks from './SelectedTasks'

function TaskList () {
	const [tasks, setTasks] = useState([])
	const [selectedTasks, setSelectedTasks] = useState([])

	useEffect(() => {
		setTasks(store.getItems())
		store.emitter.addEventListener('UPDATE', () => {
			setTasks([...store.getItems()])
		})
	}, [])

	// Selectează un task
	const select = (item) => {
		if (!selectedTasks.find(e => e.id === item.id)) {
			setSelectedTasks([...selectedTasks, item])
		}
	}

	// Deselectează un task
	const deselect = (item) => {
		setSelectedTasks(selectedTasks.filter(e => e.id !== item.id))
	}

	return (
		<div>
			<div>
				{tasks.map((e) => 
					<Task 
						item={e} 
						key={e.id} 
						onSelect={select} 
						onDeselect={deselect}
						isSelected={selectedTasks.some(task => task.id === e.id)} 
					/>
				)}
			</div>
			<SelectedTasks selectedTasks={selectedTasks} />
		</div>
	)
}

export default TaskList

