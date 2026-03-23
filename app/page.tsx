import { CheckoutCard } from './components/CheckoutCard';
import { GlobalFooter } from './components/GlobalFooter';

export default function Home() {
  return (
    <div className="bg-brand-light text-brand-dark min-h-screen flex flex-col items-center justify-start sm:justify-center p-4">
      <CheckoutCard />
      <GlobalFooter />
    </div>
  );
}
