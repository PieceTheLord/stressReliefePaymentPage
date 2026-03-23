export function ProductDetails() {
  return (
    <section className="p-6 space-y-4">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-brand-dark">Stop being stressed</h1>
        <p className="text-brand-muted mt-1 text-sm sm:text-base">Science approach to instant mental clarity. </p>
      </div>

      <ul className="space-y-3 py-2">
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium">Own a permanent resource that replaces expensive therapy sessions with a proven, repeatable framework.</span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium">12 specific exercises designed to stop the &quot;fight or flight&quot; response and return your brain to a creative state.</span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium text-brand-emerald">Bonus: Exclusive video masterclass</span>
        </li>
      </ul>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-brand-muted font-medium">Total price</span>
        <span className="text-3xl font-bold text-brand-dark">9.99$</span>
      </div>
    </section>
  );
}
