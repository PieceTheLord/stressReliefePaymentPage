import { YooCheckout } from '@a2seven/yoo-checkout';

export const checkout = new YooCheckout({
  shopId: process.env.YOOKASSA_STORE_ID!,
  secretKey: process.env.YOOKASSA_STROE_SECRET!
});
