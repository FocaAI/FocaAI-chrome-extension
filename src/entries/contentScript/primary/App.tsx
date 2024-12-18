import logo from '@/assets/logo.svg';

function App() {
  const logoImageUrl = new URL(logo, import.meta.url).href;

  return (
    <div className="logo">
      <img src={logoImageUrl} height="50" alt="" />
    </div>
  );
}

export default App;
