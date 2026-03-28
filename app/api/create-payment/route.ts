import { checkout } from "@/lib/YouKassaPayment";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';


export async function POST(request: Request) {
  try {
    // Correct way to get JSON data in Next.js App Router
    const idempotency_key = uuidv4();
    const payment = await checkout.createPayment({
      amount: {
        value: "990",
        currency: 'RUB',
      },
      payment_method_data: {
        type: 'bank_card',
      },
      confirmation: {
        type: 'redirect',
        return_url: `http://localhost:3000/successfulpayment`
      },
      capture: true,
    }, idempotency_key);

    return NextResponse.json({ payment});
  } catch (error: any) {
    console.error('Ошибка при создании платежа:', error.config);
    return NextResponse.json({ error: 'Ошибка при создании платежа' }, { status: 500 });
  }
}