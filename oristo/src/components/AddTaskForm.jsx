// src/components/AddTaskForm.jsx
import { useState, useEffect } from 'react';

export default function AddTaskForm({ onSubmit, editingTask, onCancel }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    remarks: '',
  });

  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate?.split('T')[0],
        status: editingTask.status,
        remarks: editingTask.remarks || '',
      });
    } else {
      setTask({ title: '', description: '', dueDate: '', status: 'Pending', remarks: '' });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate || !task.status) {
      return alert('Title, Due Date, and Status are required');
    }
    onSubmit(task);
    setTask({ title: '', description: '', dueDate: '', status: 'Pending', remarks: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 mb-8">
      <h2 className="text-xl font-bold text-blue-600">
        {editingTask ? 'Edit Task' : 'Add New Task'}
      </h2>

      <input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
        className="w-full border px-4 py-2 rounded-lg"
      />

      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        type="date"
        required
        className="w-full border px-4 py-2 rounded-lg"
      />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded-lg"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <textarea
        name="remarks"
        value={task.remarks}
        onChange={handleChange}
        placeholder="Remarks (optional)"
        className="w-full border px-4 py-2 rounded-lg"
      />

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button type="button" onClick={onCancel} className="text-gray-500 hover:underline">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}