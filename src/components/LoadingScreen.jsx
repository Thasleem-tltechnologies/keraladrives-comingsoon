import '../styles/Loadingscreen.css';
import Logo from './Logo';

const LoadingScreen = ({ isExiting }) => {
  return (
    <div className={`loader-wrapper ${isExiting ? 'exit' : ''}`}>
      <div className="loader">
        <Logo />
        <div className="loader-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;