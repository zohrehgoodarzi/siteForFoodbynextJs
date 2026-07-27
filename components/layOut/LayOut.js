import Link from "next/link"
import styles from "./LayOut.module.css";

function LayOut({children}) {
  return (
    <div className={styles.layOut}>
    <header className={styles.header}>
        <div className={styles.left}> <Link href={"/"}>BotoFood</Link></div>
        <div className={styles.right}>
        <Link href={"/menu"}>Menu</Link>
        
        <Link href={"/categories"}>Categories</Link>
        </div>
       
    </header>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        <Link href={"https://botostart.ir/"} target="_blank">BotoStart</Link>
        Next.js Course | BotoFood Projext &copy;
    </footer>
    </div>
  )
}

export default LayOut