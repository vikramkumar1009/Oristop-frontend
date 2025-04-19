export default function TaskList({ tasks, onEdit, onDelete, search }) {
    const filtered = tasks.filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium tracking-wide ${
                  task.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : task.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {task.status}
              </span>
            </div>
  
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
  
            <div className="text-xs text-gray-500 space-y-1 mb-4">
              <p>
                <span className="font-medium text-gray-700">Due:</span>{' '}
                {task.dueDate?.split('T')[0] || 'N/A'}
              </p>
              <p>
                <span className="font-medium text-gray-700">Remarks:</span>{' '}
                {task.remarks || 'None'}
              </p>
              <p>
                <span className="font-medium text-gray-700">Created by:</span>{' '}
                {task.createdByName}
              </p>
              <p>
                <span className="font-medium text-gray-700">Updated:</span>{' '}
                {task.updatedOn?.split('T')[0]}
              </p>
            </div>
  
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => onEdit(task)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium transition"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  