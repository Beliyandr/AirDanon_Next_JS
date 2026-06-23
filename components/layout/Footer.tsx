import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <Brand />
        <p>FPV антенны украинского производства</p>
        <span>© {new Date().getFullYear()} AirDanon</span>
      </div>
    </footer>
  );
}
