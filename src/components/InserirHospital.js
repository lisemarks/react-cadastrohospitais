import React, { useState } from 'react';

function InserirHospital({ addTodo }) {
    const [hospitalInput, setHospitalInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!hospitalInput) return;
        addTodo({ complete: false, task: hospitalInput, });
        setHospitalInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="Informe um hospital"
                type="text"
                className="input"
                value={hospitalInput} maxlength="100"
                onChange={e => setHospitalInput(e.target.value)}
            />
        </form>
    );
};
export default InserirHospital;