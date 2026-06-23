import { Camera, MessageCircle, Send, Sparkles, TestTubeDiagonal, Waves } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section className="contact-section" id="contacts"><div className="container contact-grid">
      <Reveal className="contact-copy"><span className="eyebrow">Быстрый запрос</span><h2>Расскажите, какой сигнал вам нужен</h2>
        <p>Укажите частоту, оборудование и задачу. Мы сориентируем по конфигурации и зададим только те вопросы, которые действительно влияют на результат.</p>
        <div className="contact-tags"><span><Sparkles size={15} />Ответ инженера</span><span><TestTubeDiagonal size={15} />Измерение изделия</span></div>
      </Reveal>
      <Reveal className="contact-panel" delay={100}><div className="contact-panel-icon"><MessageCircle /></div><h3>Написать напрямую</h3><p>Самый быстрый способ обсудить частоту, коннектор и количество.</p>
        <a className="button button-primary button-wide" href="https://t.me/" target="_blank" rel="noreferrer"><Send size={18} />Открыть Telegram</a>
        <div className="social-row"><a href="#" aria-label="Instagram"><Camera size={19} /></a><a href="#" aria-label="TikTok"><Waves size={19} /></a><span>Ссылки подключим перед запуском</span></div>
      </Reveal>
    </div></section>
  );
}
