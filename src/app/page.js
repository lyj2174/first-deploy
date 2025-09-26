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
          width={240}
          height={250}
          style={{ borderRadius: "50%" }}
        />
        <h1 className={styles.name}>이용진</h1>
      </header>

      <main className={styles.main}>
        <Card title="내 정보">
          <ul>
            <li>Github : lyj2174</li>
            <br/>
            <li>Email : lyj2174@gmail.com</li>
            <br/>
            <li>취미 : 골프, 여행, 헬스</li>
            <br/>
            <li>글로벌 클라우드 환경에서 안정적이고 확장성 있는 시스템을 설계·운영하는 <span className={styles.cloud}>클라우드 엔지니어</span>를 목표로 하고 있습니다.</li>
          </ul>
        </Card>
        {/* 학력 */}
        <Card title="학력">
          <ul>
            <li>한국외국어대학교</li>
            <h2>
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
            <li>AWS Certified Solutions Architect - Associate</li>
            <br/>
            <li>SQLD</li>
            <br/>
            <li>리눅스마스터 2급</li>
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
            <h2>
            <ul>인천공항 비행기 탑승 소요시간 예측 시스템</ul>
            <ul>기술스택 : pandas, random-forest, mysql, react, flask, render, tensor-flow, one-class SVM</ul>
            </h2>
            <br/>
            <li>
              <a href="https://github.com/orgs/lgcns-2nd-mp/repositories" target="_blank">
                요기조기
              </a>
            </li>
            <h2>
              <ul>Tmap api를 활용한 휴게소 커뮤니티 시스템</ul>
              <ul>기술스택 : react, spring, mariaDB</ul>
            </h2>
          </ul>
        </Card>
      </main>
    </div>
  );
}