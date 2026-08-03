import React from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-black text-blue-900">Contact and Support</h1>
        <p className="text-gray-500">Section 21 Compliance: We are here to help buyers and sellers across Campus Dorms & the City</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-2xl border space-y-2">
          <Phone className="w-6 h-6 text-orange-500" />
          <h3 className="font-black text-blue-900">WhatsApp & Phone</h3>
          <p className="text-sm font-bold text-gray-800">+234 913 387 1745</p>
          <p className="text-xs text-gray-500">Active Mon-Sun, 8 AM - 9 PM</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border space-y-2">
          <Mail className="w-6 h-6 text-blue-900" />
          <h3 className="font-black text-blue-900">Official Support Email</h3>
          <p className="text-sm font-bold text-gray-800">support@flexiacart.com</p>
          <p className="text-xs text-gray-500">24-hour response guarantee</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border space-y-2">
          <MessageSquare className="w-6 h-6 text-green-600" />
          <h3 className="font-black text-blue-900">Help Desk Ticket</h3>
          <p className="text-sm font-bold text-gray-800">Rule-Based Assistant</p>
          <Link href="/support" className="text-xs text-orange-500 font-bold underline block pt-1">
            Open Support Ticket &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
