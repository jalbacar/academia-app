import React, { useContext } from 'react';

import { Student, StudentsContext } from '../context/student-context';

const StudentsList: React.FC = () => {
    
    const context = useContext(StudentsContext);

    const { students, removeStudent } = context;

    return (
        <ul>
            {
                students.map((student: Student) => (
                    <li key={student.id}>
                        { student.name } - { student.age }
                        <button onClick={() => removeStudent(student.id) }>
                            Eliminar
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default StudentsList;