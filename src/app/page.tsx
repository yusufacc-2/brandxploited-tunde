import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Roster from '@/components/home/Roster';
import Footer from '@/components/layout/Footer';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Roster />
      <About />
      <Features />
      <Footer />
    </main>
  );
}
