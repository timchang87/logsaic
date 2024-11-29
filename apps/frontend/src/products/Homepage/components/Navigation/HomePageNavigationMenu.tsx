import {
  Root,
  Item,
  Link,
  List,
  Trigger,
} from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import styles from './HomePageNavigationMenu.module.scss';

export const HomePageNavigationMenu = () => {
  return (
    <Root className={styles.Root}>
      <Item className={styles.Item}>
        <Link href="/">Home</Link>
      </Item>
      <List className={styles.List}>
        <Item className={styles.Item}>
          <Trigger>
            Products <CaretDownIcon />
          </Trigger>
        </Item>
      </List>
      <Item className={styles.Item}>
        <Link href="/pricing">Pricing</Link>
      </Item>
      <Item className={styles.Item}>
        <Link href="/docs">Docs</Link>
      </Item>
    </Root>
  );
};
