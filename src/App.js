function App() {
  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center">
      <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">
        Save
      </button>

      <button className="bg-success text-primary px-6 py-2 rounded ml-4 hover:bg-success-dark">
        Success
      </button>

      <button className="bg-danger text-white px-6 py-2 rounded ml-4 hover:bg-danger-dark">
        Delete
      </button>
    </div>
  );
}

export default App;
