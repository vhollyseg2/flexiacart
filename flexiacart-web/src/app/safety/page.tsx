import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-black text-blue-900">Marketplace Safety & Anti-Scam Rules</h1>
        <p className="text-gray-500">How we protect buyers and sellers on FlexiaCart</p>
      </div>

      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl space-y-3 text-red-800">
        <div className="flex items-center gap-2 font-black text-lg">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <span>Never Share Sensitive Credentials in Chat</span>
        </div>
        <p className="text-sm">
          Do not share your passwords, OTP codes, card PINs, CVV numbers, or bank login details with any seller or support agent. FlexiaCart will never ask you for outside payments.
        </p>
      </div>

      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-black text-blue-900">Seller Verification</h2>
        <p>
          Every seller on FlexiaCart undergoes identity and payment verification before their products appear online. All transactions must be completed through our secure hosted checkout.
        </p>
      </div>
    </div>
  );
}
