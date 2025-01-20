import React from 'react'

function Task ({ item, onSelect, onDeselect, isSelected }) {
	return (
		<div>
			{item.description} {item.priority}
			{isSelected ? (
				<button onClick={() => onDeselect(item)}>Deselect</button>
			) : (
				<button onClick={() => onSelect(item)}>Select</button>
			)}
		</div>
	)
}

export default Task
