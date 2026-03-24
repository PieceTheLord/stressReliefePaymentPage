'use client';

import { useState } from 'react';

export function CheckoutActions() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 990,
          currency: 'RUB',
          description: 'Оплата электронной книги по борьбе со стрессом',
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при создании платежа');
      }

      const data = await response.json();
      window.location.href = data.confirmation.confirmation_url;
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 pb-8">
      <button
        className="w-full bg-brand-emerald hover:bg-[#0da673] active:scale-[0.98] text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-90 disabled:cursor-not-allowed"
        onClick={handlePayment}
        disabled={loading}
      >
        {!loading ? (
          <span>Оплатить и скачать</span>
        ) : (
          <>
            <span>Оплата...</span>
            <div className="border-2 border-white/30 rounded-full border-t-white w-5 h-5 animate-spin"></div>
          </>
        )}
      </button>

      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand-muted uppercase tracking-wider">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path></svg>
          Безопасная оплата. Мгновенный доступ.
        </div>
      </div>
    </section>
  );
}
