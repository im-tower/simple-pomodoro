import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/app.scss';
import PomodoroTimer from "./components/pomodoro";

function App() {
  return (
    <div className="App">
      <PomodoroTimer />
    </div>
  );
}

export default App;
