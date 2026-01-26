import { ThemeProvider } from './context/ThemeContext'
import Dashboard from './components/Dashboard/Dashboard'
import MainLayout from './components/Layout/MainLayout'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
