"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, PhoneCall, Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function CallbackForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").replace(/\D/g, "");

    if (phone.length < 9) {
      setStatus("error");
      setMessage("Перевірте, будь ласка, номер телефону.");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setMessage("Форма очікує підключення сервісу відправлення.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
      setMessage("Дякуємо. Ми зв’яжемося з вами найближчим часом.");
    } catch {
      setStatus("error");
      setMessage("Не вдалося надіслати запит. Спробуйте ще раз або напишіть у Telegram.");
    }
  }

  return (
    <form className="callback-form" onSubmit={handleSubmit} noValidate>
      <div className="callback-heading">
        <div className="callback-icon"><PhoneCall size={21} /></div>
        <div><span className="eyebrow">Зворотний дзвінок</span><h3>Залишити запит</h3></div>
      </div>
      <div className="form-fields">
        <label><span>Ваше ім’я</span><input name="name" type="text" autoComplete="name" placeholder="Як до вас звертатися" required /></label>
        <label><span>Номер телефону</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+380 __ ___ __ __" required /></label>
        <label><span>Питання або завдання</span><textarea name="question" rows={3} placeholder="Наприклад: потрібна антена на 5.8 ГГц" required /></label>
        <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      <label className="consent-field"><input name="consent" type="checkbox" required /><span>Погоджуюся на використання контактних даних для відповіді на запит.</span></label>
      <button className="button button-primary callback-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle className="spin-icon" size={18} /> : status === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
        {status === "sending" ? "Надсилаємо..." : status === "success" ? "Запит надіслано" : "Замовити дзвінок"}
      </button>
      {message && <p className={`form-message is-${status}`} role="status">{message}</p>}
    </form>
  );
}
