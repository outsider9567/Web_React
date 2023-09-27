import styles from './page.module.css'
import MyName from './myname'
import MyButton from './mybutton'
import Click from './click'
import ProductList from './product/productList'
export default function Home() {
  return (<div className={styles.main}>
    <h1>Hello</h1>
    <MyName />
    <MyButton />
    <MyButton />
    <Click />
    <ProductList/>
  </div>)
}
