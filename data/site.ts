import {
  Activity,
  CircuitBoard,
  Gauge,
  Radio,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Wrench,
  Zap,
  Check,
} from "lucide-react";
import type { Advantage, FeatureStep, Product } from "@/types/site";

export const navigation = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#catalog", label: "Каталог" },
  { href: "#testing", label: "Контроль качества" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const advantages: Advantage[] = [
  { icon: Activity, number: "01", title: "Идеальный КСВ (VSWR)", text: "Каждая антенна проходит индивидуальное тестирование на векторном анализаторе цепей. Никакого случайного результата." },
  { icon: ShieldCheck, number: "02", title: "Стойкость к падениям", text: "Прочные корпуса точной 3D-печати защищают элементы антенны во время жестких посадок и полевой эксплуатации." },
  { icon: SlidersHorizontal, number: "03", title: "Кастомные частоты", text: "Моделируем и настраиваем антенну под конкретную частоту, оборудование и сценарий использования." },
];

export const products: Product[] = [
  { band: "5.8 ГГц", type: "Cloverleaf", title: "ADN Clover 5.8", meta: ["RHCP / LHCP", "SMA / RP-SMA", "до 1.3 VSWR"], color: "orange" },
  { band: "1.2-1.3 ГГц", type: "Long Range", title: "ADN Range 1.2", meta: ["Круговая поляризация", "Усиленный корпус", "кастомный коннектор"], color: "blue" },
  { band: "Под ваше ТЗ", type: "Custom Lab", title: "ADN Custom", meta: ["Расчет частоты", "Прототипирование", "Отчет измерений"], color: "silver" },
];

export const testSteps: FeatureStep[] = [
  { icon: CircuitBoard, title: "Моделирование", text: "Рассчитываем геометрию излучателя под заданную частоту и условия." },
  { icon: Wrench, title: "Сборка", text: "Фиксируем параметры конструкции и собираем изделие с контролируемыми допусками." },
  { icon: Gauge, title: "Измерение", text: "Проверяем КСВ, резонанс и рабочий диапазон на анализаторе цепей." },
  { icon: Check, title: "Финальный контроль", text: "Маркируем проверенную антенну и фиксируем ее фактические показатели." },
];

export const useCases: FeatureStep[] = [
  { icon: Radio, title: "FPV видеосвязь", text: "Стабильное изображение на стандартных и нестандартных частотах." },
  { icon: Target, title: "Дальние дистанции", text: "Конфигурации для полетов, где запас линка имеет решающее значение." },
  { icon: Zap, title: "Полевая эксплуатация", text: "Корпуса и соединения, рассчитанные на реальную нагрузку." },
];
