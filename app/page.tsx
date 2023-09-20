import Image from 'next/image'
import styles from './page.module.css'
import MyName from './myname'
import MyButton from './mybutton'

export default function Home() {
  return (<div className={styles.main}>
    <h1>Hello</h1>
    <MyName/>
    <MyButton/>
    </div>
  )
}
