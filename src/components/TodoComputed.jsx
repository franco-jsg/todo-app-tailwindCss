const TodoComputed = ({ computedItems, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 transition-all  duration-700 dark:bg-gray-800">
      <span className="text-gray-400">{computedItems} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
