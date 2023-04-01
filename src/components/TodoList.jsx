import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <Droppable droppableId="todos">
      {
        (droppableProvided) => (
          <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-700  dark:bg-gray-800 [&>article]:p-4  ">
            {todos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}> 
                  {
                    (draggableProvided) => (
                      <TodoItem
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      />
                    )
                  }
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  );
};

export default TodoList;
