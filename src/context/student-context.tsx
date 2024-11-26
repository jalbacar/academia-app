import React, { useState, createContext, ReactNode } from 'react';

export type Student = {
    id: number;
    name: string;
    age: number;
}

type StudentsContextType = {
    students: Student[];
    addStudent: (name: string, age: number) => void;
    removeStudent: (id: number) => void;
};

export const StudentsContext = createContext<StudentsContextType | undefined>(undefined);

type StudentsProviderProps = {
    children: ReactNode;
}

export const StudentsProvider: React.FC<StudentsProviderProps> = ({ children }) => {

    const [students, setStudents] = useState<Student[]>([
        {id:1, name:'Marcos', age:20},
        {id:2, name:'Juana', age:32}
    ]);

    const addStudent = (name: string, age: number) => {
        const newStudent: Student = {id:Date.now(), name, age};
        setStudents(prevStudents => [...prevStudents, newStudent]);
    };

    const removeStudent = (id: number) => {
        setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    };

    return (
        <StudentsContext.Provider value={{ students, addStudent, removeStudent}}>
            {children }
        </StudentsContext.Provider>
    );

};

