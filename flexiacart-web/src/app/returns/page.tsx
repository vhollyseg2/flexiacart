import React from 'react';

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-black text-blue-900">Returns, Disputes & Refund Reference Policy</h1>
      <p className="text-gray-600 leading-relaxed">
        We stand by every order delivered across Campus Dorms and City Residences. If a delivered product is defective or incorrect, buyers can submit an Order Dispute within 48 hours.
      </p>
      <div className="bg-gray-50 p-6 rounded-2xl border space-y-2">
        <h3 className="font-bold text-blue-900">Immutable Refund Reference Tracking</h3>
        <p className="text-sm text-gray-600">
          All approved refunds require an exact refunded amount, bank-transfer reference ID, and administrator note. Approved refunds are credited directly to your FlexiaWallet or original payment method.
        </p>
      </div>
    </div>
  );
}
