import React, { useState } from 'react';
import { useNewsletter } from '../../services/newsletter';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { subscribe } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await subscribe(email, firstName, lastName);
      setStatus('success');
      setEmail('');
      setFirstName('');
      setLastName('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center">
            Successfully subscribed to the newsletter!
          </p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-center">
            Failed to subscribe. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default NewsletterSignup;