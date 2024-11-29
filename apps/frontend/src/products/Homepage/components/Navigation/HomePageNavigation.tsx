import { HomePageNavigationMenu } from './HomePageNavigationMenu';
import styles from './HomePageNavigation.module.scss';

export const HomePageNavigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.logo}>logsaic</div>
          <HomePageNavigationMenu />
        </div>
        <div className={styles.buttons}>
          <button className={styles.login}>Login</button>
          <button className={styles.register}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};
