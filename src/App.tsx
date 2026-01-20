import Header from './components/Header';
import DonationReceipt from './components/DonationReceipt';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <DonationReceipt />
      </main>
      <Footer />
    </div>
  );
}

export default App;
