import Info from "@/components/Info";
import NetworkSwitcher from "@/components/NetworkSwitcher";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main >
        <Info />
        <NetworkSwitcher />
      </main>
    </>
  );
}
