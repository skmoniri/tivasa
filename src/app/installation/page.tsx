import InstallationHero from "../components/tivasa/installation/InstallationHero";
import InstallationApproach from "../components/tivasa/installation/InstallationApproach";
import InstallationProcess from "../components/tivasa/installation/InstallationProcess";
import InstallationCommissioning from "../components/tivasa/installation/InstallationCommissioning";
import InstallationMaintenance from "../components/tivasa/installation/InstallationMaintenance";
import InstallationManufacturers from "../components/tivasa/installation/InstallationManufacturers";
import InstallationCTA from "../components/tivasa/installation/InstallationCTA";

export default function InstallationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <InstallationHero />
      <InstallationApproach />
      <InstallationProcess />
      <InstallationCommissioning />
      <InstallationMaintenance />
      <InstallationManufacturers />
      <InstallationCTA />
    </main>
  );
}
