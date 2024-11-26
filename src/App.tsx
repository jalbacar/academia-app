import './App.css'
import StudentsList from './components/StudentsList'
import { StudentsProvider } from './context/student-context'

function App() {
  
  return (
    <StudentsProvider>
      <div>
        <h1>Gestion de academia</h1>
        <StudentsList />
      </div>
    </StudentsProvider>
  )
}

export default App
