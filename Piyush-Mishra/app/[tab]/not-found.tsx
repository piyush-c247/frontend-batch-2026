import Link from "next/link"; 
import styles from "@/components/Tabs/NotFound.module.scss";

export default function NotFound() {

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>This tab does not exist.</p>
      <Link href="/incidents" className={styles.link}>
        Go to Incidents
      </Link>
    </div>
  );
}
