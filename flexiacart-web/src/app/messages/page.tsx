"use client";

import React, { useState } from 'react';
import { ShieldAlert, Send, Lock, MessageSquare, AlertTriangle } from 'lucide-react';

export default function MessagingPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'SELLER', text: 'Hello! Thank you for ordering the Oraimo FreePods 4. Would you like campus dorm delivery or city delivery?', time: '10:15 AM' },
    { id: 2, sender: 'USER', text: 'Hi! Campus dorm delivery please, Queen Amina Hall Room 104.', time: '10:16 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { id: Date.now(), sender: 'USER', text: input, time: 'Just now' }]);
    setInput('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Safety Warning Banner (Section 13 Compliance) */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3 text-red-700">
        <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-600" />
        <div className="text-xs sm:text-sm font-bold">
          MARKETPLACE SAFETY WARNING: Never share your passwords, OTPs, card PINs, CVV, or bank login information in chat. Verified sellers will NEVER ask for outside payments!
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[550px]">
        {/* Header */}
        <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black flex items-center justify-center">
              CS
            </div>
            <div>
              <h3 className="font-bold text-sm">Chinedu Tech & Groceries Store</h3>
              <p className="text-[10px] text-green-300">● Trusted Seller — Typically replies in 5 mins</p>
            </div>
          </div>
          <span className="text-xs bg-blue-800 px-3 py-1 rounded-full font-bold">Order #FC-8924</span>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'USER' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-md px-4 py-2.5 rounded-2xl text-sm font-semibold ${
                  m.sender === 'USER'
                    ? 'bg-orange-500 text-white rounded-br-none shadow-sm'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">{m.time}</span>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message to the seller..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
