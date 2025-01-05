import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLIC_KEY || '');

export const usePayments = () => {
  const processStripePayment = async (amount: number) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();
      return stripe.confirmCardPayment(clientSecret);
    } catch (error) {
      console.error('Payment failed:', error);
      throw error;
    }
  };

  return { processStripePayment };
};