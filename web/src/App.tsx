import './styles/global.css';
import { Habit } from './components/Habit'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      < Habit completed={3} />
      < Habit completed={6} />
      < Habit completed={33} />
      < Habit completed={53} />
    </div>

  )
}

export default App
