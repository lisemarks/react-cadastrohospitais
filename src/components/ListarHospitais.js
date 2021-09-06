import React from 'react';

function ListarHospitais({ todos, updateTodos }) {

    const removerHospital = (index) => {
        const updatedList = todos.filter((task, taskIndex) => {
            return taskIndex !== index;
        });
        updateTodos(updatedList);
    }
    
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <div>
                <div
                    key={index}
                    className={`todo ${todo.complete ? "taskDone" : ""}`}
                    >
                     {todo.task}
                </div>
                <div><button className="button" onClick={() => removerHospital(index)}>Excluir</button>  </div>
                </div>
            ))}
        </div>
    );
};

export default ListarHospitais;