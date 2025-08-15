import CardProject from "../components/ui/card-progect";
import myDashboard from "../../public/my-dashboard.jpg";
import LogistX from "../../public/LogistX.jpg";
import Billing from "../../public/Billing.jpg";
import Savolxon from "../../public/Savolxon.jpg";
import Countres from "../../public/Countres.jpg";
import Weather from "../../public/Weather.jpg";
import Entertainment from "../../public/Entertainment.jpg";
import Planets from "../../public/Planets.jpg";
import Calculyator from "../../public/Calculyator.jpg";
import JsProgect from "../../public/JsProgect.jpg";

const projects = [
  {
    id: 1,
    title: "Texnomarc",
    image: myDashboard,
    status: "Tugallangan",
    stars: 150,
    description:
      "E-commerce boshqaruvi uchun zamonaviy admin panel. Real vaqtda tahlillar, mahsulot omborini boshqarish imkoniyati mavjud ('admin', '12345678')",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Ant Design", "Node.js", "Express.js"],
    date: "14.07.2025",
    demoLink: "https://my-progect-rho.vercel.app",
  },
  {
    id: 2,
    title: "LogistX",
    image: LogistX,
    status: "Jarayonda",
    stars: 87,
    description:
      "Yuk tashish xizmatlarini boshqarish tizimi. Buyurtmalarni kuzatish, marshrutlarni rejalashtirish va transport vositalarining real vaqtda holatini ko‘rish imkonini beradi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "React Lucide"],
    date: "02.08.2025",
    demoLink: "https://logistx.uz/uz",
  },
  {
    id: 3,
    title: "Savolxon",
    image: Savolxon,
    status: "Jarayonda",
    stars: 120,
    description:
      "Foydalanuvchilar o‘zaro savol-javob qilishi mumkin bo‘lgan onlayn platforma. Test, so‘rovnoma va bilim almashish imkoniyatlariga ega.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Ant Design", "Shadcn UI"],
    date: "20.07.2025",
    demoLink: "https://preview-savol-uz-platform-kzmj9jdi09jphp8oscpw.vusercontent.net",
  },
  {
    id: 4,
    title: "Billing Asia University",
    image: Billing,
    status: "Jarayonda",
    stars: 150,
    description:
      "Oliy ta’lim muassasasi uchun to‘lovlarni boshqarish tizimi. Talabalar hisobini yuritish, to‘lovlar tarixini ko‘rish va avtomatik hisob-faktura yaratish imkoniyati mavjud.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Ant Design"],
    date: "15.06.2025",
    demoLink: null,
  },
  {
    id: 5,
    title: "Res Countres",
    image: Countres,
    status: "Tugallangan",
    stars: 100,
    description:
      "Mamlakatlar bo‘yicha statistik ma’lumotlarni ko‘rsatadigan web-ilova. Aholi soni, maydoni, poytaxti va boshqa muhim ma’lumotlarni taqdim etadi.",
    tags: ["React.js", "Tailwind CSS"],
    date: "20.05.2025",
    demoLink: "https://idyllic-daffodil-c9b8d3.netlify.app",
  },
  {
    id: 6,
    title: "Entertainment",
    image: Entertainment,
    status: "Tugallangan",
    stars: 120,
    description:
      "Filmlar, seriallar va o‘yinlar haqida ma’lumot beruvchi platforma. Reyting, tavsif va treylerlarni ko‘rish imkonini beradi.",
    tags: ["React.js", "Tailwind CSS"],
    date: "25.05.2025",
    demoLink: "https://vermillion-alfajores-06d35f.netlify.app",
  },
  {
    id: 7,
    title: "Planets",
    image: Planets,
    status: "Tugallangan",
    stars: 120,
    description:
      "Quyosh tizimidagi sayyoralar haqida batafsil ma’lumot. Har bir sayyora uchun suratlar, tavsif va qiziqarli faktlar mavjud.",
    tags: ["React.js", "Tailwind CSS"],
    date: "20.07.2025",
    demoLink: "https://transcendent-pavlova-2223c8.netlify.app",
  },
  {
    id: 8,
    title: "Weather",
    image: Weather,
    status: "Tugallangan",
    stars: 120,
    description:
      "Ob-havo ma’lumotlarini real vaqtda ko‘rsatadigan ilova. Joylashuv bo‘yicha hozirgi harorat, namlik, shamol tezligi va 7 kunlik prognozni taqdim etadi.",
    tags: ["React.js", "Tailwind CSS"],
    date: "20.07.2025",
    demoLink: "https://wathe.netlify.app",
  },
  {
    id: 9,
    title: "Calculator",
    image: Calculyator, 
    status: "Tugallangan",
    stars: 120,
    description:
      "Oddiy va qulay kalkulyator ilovasi. Arifmetik amallarni (qo‘shish, ayirish, ko‘paytirish, bo‘lish) bajarish, natijani tez va aniq ko‘rsatish imkoniyatiga ega.",
    tags: ["JavaScript", "SASS"],
    date: "12.06.2025",
    demoLink: "https://spiffy-frangipane-b72815.netlify.app",
  },
  {
    id: 10,
    title: "JavaScript Mini Games",
    image: JsProgect, 
    status: "Tugallangan",
    stars: 120,
    description:
      "JavaScript yordamida yaratilgan kichik interaktiv loyihalar to‘plami. Har bir loyiha foydalanuvchi bilan real vaqt rejimida muloqot qiladi va turli funksiyalarni bajaradi.",
    tags: ["JavaScript", "SASS"],
    date: "12.06.2025",
    demoLink: "https://inquisitive-puffpuff-2dd36f.netlify.app",
  },  
];

const Projects = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Loyihalar
      </h1>
      <div
        className={`gap-6 grid ${
          projects.length === 1
            ? "grid-cols-1 place-items-center" 
            : "grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-items-center md:place-items-start" 
        }`}
      >
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
