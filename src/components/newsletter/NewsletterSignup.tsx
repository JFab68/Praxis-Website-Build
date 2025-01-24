import React, { useState } from 'react';
import { useNewsletter } from '../../services/newsletter';
import Button from '../ui/Button';
import { H3, Body, Small } from '../ui/Typography';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [programs, setPrograms] = useState({
    doula: false,
    legalReform: false,
    prisonOversight: false,
    substanceUse: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { subscribe } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await subscribe({
        email,
        firstName,
        lastName,
        programs
      });
      setStatus('success');
      setEmail('');
      setFirstName('');
      setLastName('');
      setPrograms({
        doula: false,
        legalReform: false,
        prisonOversight: false,
        substanceUse: false
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleProgramChange = (program: keyof typeof programs) => {
    setPrograms(prev => ({ ...prev, [program]: !prev[program] }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <H3 className="text-center mb-4">
          Stay Informed About Our Programs
        </H3>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
            aria-required="true"
            aria-describedby="email-description"
          />
          <div id="email-description" className="sr-only">
            Please enter your email address to subscribe to our newsletter
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            aria-describedby="firstName-description"
          />
          <div id="firstName-description" className="sr-only">
            Optional: Enter your first name for personalized communications
          </div>
          </div>

          <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            aria-describedby="lastName-description"
          />
          <div id="lastName-description" className="sr-only">
            Optional: Enter your last name for personalized communications
          </div>
          </div>
        </div>

        <div className="space-y-2">
          <H3 className="mb-2 text-lg">
            Select Programs of Interest
          </H3>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={programs.doula}
                onChange={() => handleProgramChange('doula')}
                className="form-checkbox"
              />
              <span>Doula Program</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={programs.legalReform}
                onChange={() => handleProgramChange('legalReform')}
                className="form-checkbox"
              />
              <span>Legal System Reform</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={programs.prisonOversight}
                onChange={() => handleProgramChange('prisonOversight')}
                className="form-checkbox"
              />
              <span>Prison Oversight</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={programs.substanceUse}
                onChange={() => handleProgramChange('substanceUse')}
                className="form-checkbox"
              />
              <span>Substance Use Program</span>
            </label>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe to Updates'}
          </button>
        </div>

        <div className="text-center">
          <Body className="mb-2">
            Support our mission to create meaningful change
          </Body>
          <Button
            variant="donate"
            href="/donate"
            className="w-full"
          >
            Make a Grassroots Donation
          </Button>
        </div>

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
