import styles from './page.module.css'
import SignUpCard from '@/components/SignUpCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <SignUpCard />
    </main>
  )
}
