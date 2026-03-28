
import Link from "next/link";
import { GlobalFooter } from "../components/GlobalFooter";

export default function SuccessfulPayment() {
  return (
    <div className="bg-brand-light text-brand-dark min-h-screen flex flex-col items-center justify-start sm:justify-center p-4">
      <main className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-brand-emerald"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-brand-dark">Оплата прошла успешно!</h1>
            <p className="text-brand-muted text-sm sm:text-base">Благодарим за покупку. Теперь вы можете скачать ваш гид и начать путь к спокойствию.</p>
          </div>

          <div className="space-y-3 pt-6 border-t border-gray-50 flex flex-col gap-2">
            <a
              href="/api/download"
              className="w-full bg-brand-emerald hover:bg-[#0da673] active:scale-[0.98] text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Скачать файл
            </a>

            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors py-2"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
