import { HomeClient } from "@/components/HomeClient";
import { offers } from "@/data/offers";

export default function Home() {
  return <HomeClient offers={offers} />;
}
