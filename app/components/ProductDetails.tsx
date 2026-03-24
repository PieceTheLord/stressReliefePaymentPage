export function ProductDetails() {
  return (
    <section className="p-6 space-y-4">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-brand-dark">Забудьте о стрессе</h1>
        <p className="text-brand-muted mt-1 text-sm sm:text-base">Научный подход к мгновенной ясности ума.</p>
      </div>

      <ul className="space-y-3 py-2">
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium">Получите вечный ресурс, заменяющий дорогостоящие сеансы терапии проверенной и воспроизводимой методикой.</span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium">12 специальных упражнений, разработанных для остановки реакции «бей или беги» и возвращения вашего мозга в творческое состояние.</span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
          <span className="text-sm font-medium text-brand-emerald">Бонус: эксклюзивный видео-мастер-класс</span>
        </li>
      </ul>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-brand-muted font-medium">Итоговая цена</span>
        <span className="text-3xl font-bold text-brand-dark">990₽</span>
      </div>
    </section>
  );
}
