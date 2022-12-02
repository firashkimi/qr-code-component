import qrcode from './image-qr-code.png';
import './App.css';
function App() {
  return (
    <main class="container">
      <img src={qrcode} alt='qr-code'/>
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </main>
  );
}

export default App;
