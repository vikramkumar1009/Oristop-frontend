import { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      console.log('Fetched tasks:', data);
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (task) => {
    try {
      const user = localStorage.getItem('fullName') || 'Unknown';
      const payload = {
        ...task,
        createdByName: user,
        lastUpdatedByName: user,
      };
      if (editingTask) {
        await updateTask(editingTask.id, payload);
        setEditingTask(null);
      } else {
        await createTask(payload);
      }
      setShowForm(false);
      fetchTasks();
    } catch (err) {
      console.error('Failed to save task:', err);
      alert('Failed to save task');
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert('Failed to delete task');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="hover:underline"
          >
            {showForm ? 'Close Form' : 'Add Task'}
          </button>
          <a href="/login" className="hover:underline">Logout</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {showForm && (
          <AddTaskForm
            onSubmit={handleSubmit}
            editingTask={editingTask}
            onCancel={handleCancel}
          />
        )}

        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <p className="text-center text-gray-500">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={handleEdit}
            onDelete={handleDelete}
            search={search}
          />
        )}
      </div>
    </div>
  );
}
