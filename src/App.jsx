import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Start the exit animation after 2.8s (matching logo animation duration)
    const animationTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Remove loader component after fade out transition
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3300); // 2800ms + 500ms for fade out transition

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <div className="app">
      {showLoader && <LoadingScreen isExiting={!loading} />}
      <MainContent visible={!loading} />
    </div>
  );
}

export default App;