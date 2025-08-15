import CardProject from "../components/ui/card-progect";
import myDashboard from "../../public/my-dashboard.jpg"
import LogistX from "../../public/LogistX.jpg"
import Billing from "../../public/Billing.jpg"
import Savolxon from "../../public/Savolxon.jpg"
import Countres from "../../public/Countres.jpg"
import Weather from "../../public/Weather.jpg"
import Entertainment from "../../public/Entertainment.jpg"
import Planets from "../../public/Planets.jpg"



const projects = [
  {
    id: 1,
    title: "Texnomarc",
    image: myDashboard,
    status: "Completed",
    stars: 150,
    description:
      "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management system.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "And Design", "Node.js", "Express.js"],
    date: "14.07.2025",
    demoLink: "https://my-progect-rho.vercel.app",
  },
  {
    id: 2,
    title: "LogistX",
    image: LogistX,
    status: "In Progress",
    stars: 87,
    description:
      "Weather forecasting application with live location tracking and 7-day forecast data using OpenWeather API.",
    tags: ["Next.js", "Tailwind CSS", "API", "Antd"],
    date: "01.08.2025",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Todo List App",
    image: Billing,
    status: "Completed",
    stars: 64,
    description:
      "A minimal todo list application with drag-and-drop support and local storage integration.",
    tags: ["React.js", "CSS Modules", "Antd"],
    date: "20.07.2025",
    demoLink: "#",
  },
];
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <CardProject />
      </div>
    </div>
  );
};

export default Projects;
