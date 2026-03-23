'use client';

import { useState } from 'react';

export function CheckoutActions() {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Processing your payment of $9.99. Thank you!');
    }, 1500);
  };

  return (
    <section className="px-6 pb-8">
      <button
        className="w-full bg-brand-emerald hover:bg-[#0da673] active:scale-[0.98] text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-90 disabled:cursor-not-allowed"
        onClick={handlePayment}
        disabled={loading}
      >
        {!loading ? (
          <span>Pay &amp; Download</span>
        ) : (
          <>
            <span>Redirecting...</span>
            <div className="border-2 border-white/30 rounded-full border-t-white w-5 h-5 animate-spin"></div>
          </>
        )}
      </button>

      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand-muted uppercase tracking-wider">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path></svg>
          Secure checkout. Instant access.
        </div>
      </div>
    </section>
  );
}
