"use client";

import React, { useState } from 'react';
import { MessageSquare, ShieldAlert, CheckCircle2, User, HelpCircle } from 'lucide-react';

export default function SupportDeskPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ASSISTANT', text: 'Hello! I am the FlexiaCart Automated Assistant. I can help you with Order Tracking, Delivery Fees (Campus Dorm ₦500 vs City ₦1,200), Payments, and Seller Verification. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [humanRequested, setHumanRequested] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const newMsg = { id: Date.now(), sender: 'USER' as const, text: input };
    setMessages([...messages, newMsg]);
    setInput('');

    setTimeout(() => {
      if (humanRequested) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: 'HUMAN_MODERATOR' as const, text: 'Hello, this is Moderator Tunde from FlexiaCart Support Desk. I have reviewed your ticket #SUP-9011. How may I resolve this for you?' }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: 'ASSISTANT' as const, text: 'For urgent 30-Minute delivery inquiries, dispatch riders are actively fulfilling in your zone. If you need a human agent, click "Request a Human Agent" below!' }
        ]);
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-blue-900">FlexiaCart Help & Ticket Support</h1>
          <p className="text-sm text-gray-500">Automated assistant + Escalation to Human Moderator Support Desk</p>
        </div>
        <button
          onClick={() => {
            setHumanRequested(true);
            setMessages((prev) => [
              ...prev,
              { id: Date.now(), sender: 'ASSISTANT' as const, text: '⚡ Escalating to a Human Moderator. Ticket #SUP-9011 is now OPEN.' }
            ]);
          }}
          className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl"
        >
          {humanRequested ? '● Human Moderator Active' : 'Request a Human Agent'}
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'USER' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-md px-4 py-3 rounded-2xl text-sm font-semibold ${
                  m.sender === 'USER'
                    ? 'bg-orange-500 text-white rounded-br-none shadow-sm'
                    : m.sender === 'HUMAN_MODERATOR'
                    ? 'bg-blue-900 text-white rounded-bl-none shadow-sm border-2 border-orange-400'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                }`}
              >
                <div className="text-[10px] font-black uppercase opacity-80 mb-1">
                  {m.sender === 'ASSISTANT' ? '🤖 Automated Assistant' : m.sender === 'HUMAN_MODERATOR' ? '🛡️ Human Moderator' : 'You'}
                </div>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question or issue here..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
