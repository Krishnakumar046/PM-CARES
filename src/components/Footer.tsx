function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-sm mb-6">
          © 2026 PRIME MINISTER'S OFFICE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition-colors">Home</a>
            <a href="#" className="block hover:text-white transition-colors">Print Receipt</a>
            <a href="#" className="block hover:text-white transition-colors">Foreign Donations (Credit/Debit Cards)</a>
            <a href="#" className="block hover:text-white transition-colors">Foreign Donations (Wire Transfer/SWIFT)</a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block hover:text-white transition-colors">Domestic Donations</a>
            <a href="#" className="block hover:text-white transition-colors">About</a>
            <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="block hover:text-white transition-colors">FAQs</a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          Last updated on: 18 January 2026
        </div>
      </div>
    </footer>
  );
}

export default Footer;
