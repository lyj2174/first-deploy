import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* 🔹 상단 헤더 (이름 + 프로필 사진) */}
      <header className={styles.header}>
        <Image
          src="/me.png"
          alt="My Info"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />
        <h1 className={styles.name}>이용진</h1>
      </header>

      <main className={styles.main}>
        {/* 학력 */}
        <Card title="학력">
          <ul>
            <li>한국외국어대학교</li>
            <h2 className={styles.detail}>
            <ul>미디어커뮤니케이션학부 (서울캠퍼스) : 2018 ~</ul>
            <ul>ICT학부 (글로벌캠퍼스) : 2018 ~</ul>
            </h2>
            <br/>
            <li>수원 칠보고등학교</li>
          </ul>
        </Card>

        {/* 자격증 */}
        <Card title="자격증">
          <ul>
            <li>리눅스마스터 2급</li>
            <li>SQLD</li>
            <li>AWS Certified Solutions Architect - Associate</li>
          </ul>
        </Card>

        {/* 프로젝트 */}
        <Card title="프로젝트">
          <ul>
            <li>
              <a href="https://incheon-airport-forecast-front.onrender.com/" target="_blank">
                Incheon Airport Forecast
              </a>
            </li>
            <h2 className={styles.detail}>
            <li>인천공항 비행기 탑승 소요시간 예측 시스템</li>
            <li>기술스택 : pandas, random-forest, mysql, react, flask, render, tensor-flow, one-class SVM</li>
            </h2>
          </ul>
        </Card>
      </main>
    </div>
  );
}