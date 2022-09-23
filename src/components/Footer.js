import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <h3>Descubra os melhores <strong>NFTs</strong> !</h3>
            <p>BlogNFT &copy; 2022</p>
        </footer>
    </div>
  )
}

export default Footer;