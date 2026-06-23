import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <Brand />
        <p>FPV антени українського виробництва</p>
        <span>© {new Date().getFullYear()} AirDanon</span>
      </div>
    </footer>
  );
}
