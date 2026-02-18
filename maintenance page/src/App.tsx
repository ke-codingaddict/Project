
import InteractiveGrid from './components/InteractiveGrid';
import MaintenanceContent from './components/MaintenanceContent';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen text-foreground">
      <InteractiveGrid />
      <MaintenanceContent />
      <Footer />
    </main>
  );
}

export default App;
