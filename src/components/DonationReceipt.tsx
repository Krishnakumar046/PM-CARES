function DonationReceipt() {
  const receiptData = {
    receiptNumber: "PMCARES/Web/202601201210206278",
    donationDate: "20-Jan-2026",
    transactionOrderNumber: "202601201210206278",
    name: "Mr Karthikeyan Ramalingam",
    amount: "INR 2,50,000.00",
    panNumber: "CRXXXXXXX8K",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        PM CARES VERIFY DONATION RECEIPT
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <ReceiptRow label="Receipt Number" value={receiptData.receiptNumber} />
        <ReceiptRow label="Donation Date" value={receiptData.donationDate} />
        <ReceiptRow label="Transaction Order Number" value={receiptData.transactionOrderNumber} />
        <ReceiptRow label="Name" value={receiptData.name} />
        <ReceiptRow label="Amount" value={receiptData.amount} />
        <ReceiptRow label="PAN Number" value={receiptData.panNumber} isLast />
      </div>
    </div>
  );
}

interface ReceiptRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

function ReceiptRow({ label, value, isLast = false }: ReceiptRowProps) {
  return (
    <div className={`px-4 md:px-6 py-4 md:py-5 ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <dt className="text-sm font-semibold text-gray-900 mb-1">{label}</dt>
      <dd className="text-sm md:text-base text-gray-700">{value}</dd>
    </div>
  );
}

export default DonationReceipt;
