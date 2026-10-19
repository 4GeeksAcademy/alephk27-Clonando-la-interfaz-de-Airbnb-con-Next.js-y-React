import HomeBrowser from "@/components/home/HomeBrowser";
import HomeFooter from "@/components/home/HomeFooter";
import HomeInspiration from "@/components/home/HomeInspiration";
import HomeServices from "@/components/home/HomeServices";
import MobileTabBar from "@/components/home/MobileTabBar";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white text-neutral-900">
      <HomeBrowser />
      <HomeServices />
      <HomeInspiration />
      <HomeFooter />
      <MobileTabBar />
    </div>
  );
}