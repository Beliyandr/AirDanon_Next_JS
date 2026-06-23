import { Sparkles, TestTubeDiagonal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CallbackForm } from "@/components/ui/CallbackForm";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <section className="contact-section" id="contacts"><div className="container contact-grid">
      <Reveal className="contact-copy"><span className="eyebrow">Швидкий запит</span><h2>Розкажіть, який сигнал вам потрібен</h2>
        <p>Вкажіть частоту, обладнання та завдання. Ми зорієнтуємо щодо конфігурації й поставимо лише ті запитання, які справді впливають на результат.</p>
        <div className="contact-tags"><span><Sparkles size={15} />Відповідь інженера</span><span><TestTubeDiagonal size={15} />Вимірювання виробу</span></div>
        <div className="contact-socials"><span>Або напишіть нам напряму</span><SocialLinks /></div>
      </Reveal>
      <Reveal className="contact-panel" delay={100}><CallbackForm /></Reveal>
    </div></section>
  );
}
