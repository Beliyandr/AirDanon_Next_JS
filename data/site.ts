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
import cloverleafImage from "@/public/images/products/cloverleaf-4-9-6-2.jpg";

export const navigation = [
  { href: "#advantages", label: "Переваги" },
  { href: "#catalog", label: "Каталог" },
  { href: "#partners", label: "Партнери" },
  { href: "#testing", label: "Контроль якості" },
  { href: "#contacts", label: "Контакти" },
] as const;

export const advantages: Advantage[] = [
  { icon: Activity, number: "01", title: "Ідеальний КСХ (VSWR)", text: "Кожна антена проходить індивідуальне тестування на векторному аналізаторі кіл. Жодного випадкового результату." },
  { icon: ShieldCheck, number: "02", title: "Стійкість до падінь", text: "Міцні корпуси точного 3D-друку захищають елементи антени під час жорстких посадок і польової експлуатації." },
  { icon: SlidersHorizontal, number: "03", title: "Кастомні частоти", text: "Моделюємо й налаштовуємо антену під конкретну частоту, обладнання та сценарій використання." },
];

export const products: Product[] = [
  {
    band: "4.9-6.2 ГГц", type: "Cloverleaf", title: "Антена «Конюшина»", meta: ["Кругова поляризація", "50 Ом", "КСХ 1.1-1.3"], color: "orange",
    description: "Компактна кругополяризована антена широкого діапазону для FPV-дронів, відеотелеметрії, Wi-Fi і експериментальних бездротових систем.",
    specs: [
      { label: "Робочий діапазон", value: "4.9-6.2 ГГц" },
      { label: "Тип", value: "Cloverleaf" },
      { label: "Поляризація", value: "Кругова" },
      { label: "Імпеданс", value: "50 Ом" },
      { label: "КСХ 4.9 / 5.3 ГГц", value: "1.2 / 1.1" },
      { label: "КСХ 5.8 / 6.0 ГГц", value: "1.3 / 1.2" },
    ],
    benefits: ["Широкий робочий діапазон", "Мінімальні втрати потужності", "Компактна й легка конструкція"],
    price: "350 ₴", image: cloverleafImage,
    purchaseUrl: "https://prom.ua/ua/p2767513738-antena-konyushina-ggts.html",
  },
  {
    band: "1.2-1.3 ГГц", type: "Long Range", title: "ADN Range 1.2", meta: ["Кругова поляризація", "Посилений корпус", "кастомний конектор"], color: "blue",
    description: "Конфігурація для дальніх дистанцій із посиленим корпусом і підбором конектора під ваше обладнання.",
    specs: [{ label: "Робочий діапазон", value: "1.2-1.3 ГГц" }, { label: "Поляризація", value: "Кругова" }, { label: "Конектор", value: "Під замовлення" }],
    benefits: ["Стабільний лінк на дистанції", "Посилений корпус", "Налаштування під комплект"],
  },
  {
    band: "Під ваше ТЗ", type: "Custom Lab", title: "ADN Custom", meta: ["Розрахунок частоти", "Прототипування", "Звіт вимірювань"], color: "silver",
    description: "Індивідуальна розробка антени під частоту, поляризацію, конектор, геометрію корпусу та умови експлуатації.",
    specs: [{ label: "Частота", value: "За технічним завданням" }, { label: "Поляризація", value: "За запитом" }, { label: "Контроль", value: "Векторний аналізатор кіл" }],
    benefits: ["Моделювання під задачу", "Виготовлення прототипу", "Фіксація фактичних параметрів"],
  },
];

export const testSteps: FeatureStep[] = [
  { icon: CircuitBoard, title: "Моделювання", text: "Розраховуємо геометрію випромінювача під задану частоту й умови." },
  { icon: Wrench, title: "Збірка", text: "Фіксуємо параметри конструкції та збираємо виріб із контрольованими допусками." },
  { icon: Gauge, title: "Вимірювання", text: "Перевіряємо КСХ, резонанс і робочий діапазон на аналізаторі кіл." },
  { icon: Check, title: "Фінальний контроль", text: "Маркуємо перевірену антену та фіксуємо її фактичні показники." },
];

export const useCases: FeatureStep[] = [
  { icon: Radio, title: "FPV відеозв’язок", text: "Стабільне зображення на стандартних і нестандартних частотах." },
  { icon: Target, title: "Далекі дистанції", text: "Конфігурації для польотів, де запас лінку має вирішальне значення." },
  { icon: Zap, title: "Польова експлуатація", text: "Корпуси та з’єднання, розраховані на реальне навантаження." },
];
