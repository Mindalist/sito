import MindalistHero from "./hero/mindalist-hero.component";
import { MindalistLastWorks } from "./lastWorks/mindalist-last-works.component";
import MindalistServicesSection from "./services/mindalist-services-section.component";
import MindalistPortfolio from "./portfolio/mindalist-portfolio.component";

export default function MindalistHome() {
  return (
    <div className="w-full overflow-x-clip">
      <MindalistHero />
      <MindalistServicesSection />
      <MindalistLastWorks />
      <MindalistPortfolio />
    </div>
  );
}
