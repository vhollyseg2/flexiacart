import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function ProhibitedProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-black text-blue-900">Prohibited Products Policy</h1>
        <p className="text-gray-500">Section 21 Compliance: Items strictly forbidden from being listed on FlexiaCart</p>
      </div>

      <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl space-y-3 text-red-900">
        <div className="flex items-center gap-2 font-black text-lg">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <span>Zero Tolerance for Prohibited Goods</span>
        </div>
        <p className="text-sm">
          Any seller attempting to list prohibited goods will be permanently suspended, their pending earnings frozen, and reported to relevant authorities.
        </p>
      </div>

      <div className="space-y-4 text-gray-700 font-medium">
        <h2 className="text-xl font-black text-blue-900">Strictly Prohibited Categories:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Counterfeit, fake, or unauthorized replica brand goods (perfumes, phones, shoes).</li>
          <li>Weapons, ammunition, explosives, or hazardous chemicals.</li>
          <li>Illegal drugs, narcotics, prescription drugs, or controlled substances.</li>
          <li>Stolen property, hacked digital accounts, or unauthorized software keys.</li>
          <li>Listings containing phone numbers or instructions for outside payments.</li>
        </ul>
      </div>
    </div>
  );
}
