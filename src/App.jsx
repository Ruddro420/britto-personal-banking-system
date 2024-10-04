
import './App.css'
import BottomNav from './component/BottomNav'
import SelectedDate from './component/SelectedDate'
import Summary from './component/Summary'
import TopNav from './component/TopNav'

function App() {


  return (
    <>
      <TopNav />
      <Summary />
      <SelectedDate/>
      <BottomNav />
    </>
  )
}

export default App
