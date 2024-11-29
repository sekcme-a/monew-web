
import Image from "next/image"
import styles from "./page.module.css"

const Policy = () => {

  return(
    <div className={styles.container}>
      <Image
        src={"/logo_text.png"}
        width={80}
        height={50}
        alt="로고"
      />
      <h1>이메일 인증이 완료되었습니다! 🎉</h1>
      <p>모뉴 어플로 돌아가서 회원가입 절차를 완료해주세요.</p>
    </div>
  )
}
export default Policy