import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { name: "Telegram", href: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/", icon: FaTelegramPlane, className: "social-telegram" },
  { name: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/", icon: FaInstagram, className: "social-instagram" },
  { name: "TikTok", href: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com/", icon: FaTiktok, className: "social-tiktok" },
] as const;

type SocialLinksProps = { compact?: boolean };

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className={`brand-socials ${compact ? "is-compact" : ""}`} aria-label="Соціальні мережі AirDanon">
      {socialLinks.map(({ name, href, icon: Icon, className }) => (
        <a className={`brand-social-link ${className}`} href={href} target="_blank" rel="noreferrer" aria-label={name} title={name} key={name}>
          <span className="social-icon"><Icon aria-hidden="true" /></span>
          {!compact && <span>{name}</span>}
        </a>
      ))}
    </div>
  );
}
