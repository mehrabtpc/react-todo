import { useState } from "react";

export const TodoItem = ({todo, onDelete,onUpdate,onChange}) =>{
    const [ editMode , setEditMode ] = useState(false);

    const editTodoHandler = (event) => {
        if( event.key === 'Enter' ) {
            onUpdate(todo , event.target.value);
            setEditMode(false);
        }
    }
    return (
        <>
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
            <div>
                {
                    editMode ?
                    <div>
                        <input type="text" defaultValue={todo?.title} onChange={() => {}} onKeyDown={editTodoHandler} className="w-full px-4 py-2 border border-gray-200 rounded" />
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </div>
                    :
                    <>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => onChange(todo)}
                        />
                            <p  className="inline-block mt-1 ml-2 text-gray-600 line-through">{todo.title}</p>

                        <button type="button" className="absolute right-0 flex items-center  space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={ () => setEditMode(true) } 
                            className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> onDelete(todo.id)}
                            className="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                    </>
                }
            </div>
            </li>
        </>
    );
}

