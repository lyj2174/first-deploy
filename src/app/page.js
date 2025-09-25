import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/me.png"
          alt="My Info"
          width={300}
          height={300}
          priority
        />
        <ol>
          <li>
            Git hub ID :  <code>lyj2174</code>.
          </li>
          <li>lyj2174@gmail.com
          </li>
          <li>
            취미는 골프와 여행입니다.
          </li>
        </ol>

        <div className={styles.ctas}>
          <a
            href="https://github.com/lyj2174?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            My project
          </a>
        </div>
      </main>
    </div>
  );
}
