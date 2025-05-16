import Student from './component/student'
import './App.css'

function App() {
  return (
    <>
      <Student name="Refat" age={30} isStudent={true} />
      <Student name="Sabbir" age={20} isStudent={false} />
      <Student name="Rakib" age={26} isStudent={true} />
    </>
  )}

export default App
