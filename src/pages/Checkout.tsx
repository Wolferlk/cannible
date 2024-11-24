import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface CheckoutForm {
  name: string;
  phone1: string;
  phone2: string;
  address: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    phone1: '',
    phone2: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the cart items and user details
    const cartItems = state.items.map(item => {
      const product = item.product;
      return {
        productName: product?.name,
        quantity: item.quantity,
        price: product?.price,
      };
    });

    const orderDetails = {
      name: form.name,
      phone1: form.phone1,
      phone2: form.phone2,
      address: form.address,
      cartItems,
      totalAmount: cartItems.reduce(
        (sum, item) => sum + (item.price ?? 0) * item.quantity,
        0
      ),
    };

    try {
      // Send email using a POST request to your backend (mocked for now)
      await sendOrderEmail(orderDetails);

      // Clear the cart and redirect to the order confirmation page
      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error sending order email:', error);
      // Handle error if needed
    }
  };

  // Mock function to simulate sending an email
  const sendOrderEmail = async (orderDetails: any) => {
    // Replace this with your actual API call to send an email
    const response = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  };

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">
              Primary Phone Number
            </label>
            <input
              type="tel"
              id="phone1"
              required
              value={form.phone1}
              onChange={e => setForm({ ...form, phone1: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">
              Secondary Phone Number
            </label>
            <input
              type="tel"
              id="phone2"
              required
              value={form.phone2}
              onChange={e => setForm({ ...form, phone2: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <textarea
              id="address"
              required
              rows={4}
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
