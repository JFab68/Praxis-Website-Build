import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { usePayments } from '../../services/payments';

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const { processStripePayment } = usePayments();

  const handleStripePayment = async () => {
    try {
      await processStripePayment(amount);
      // Handle successful payment
    } catch (error) {
      // Handle payment error
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Donation Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setPaymentMethod('stripe')}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Pay with Card
        </button>

        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString()
                }
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order!.capture().then((details) => {
              // Handle successful PayPal payment
            });
          }}
        />
      </div>
    </div>
  );
};

export default DonationForm;