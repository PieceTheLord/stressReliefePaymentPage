import { ProductImage } from './ProductImage';
import { ProductDetails } from './ProductDetails';
import { CheckoutActions } from './CheckoutActions';

export function CheckoutCard() {
  return (
    <main className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <ProductImage />
      <ProductDetails />
      <CheckoutActions />
    </main>
  );
}
