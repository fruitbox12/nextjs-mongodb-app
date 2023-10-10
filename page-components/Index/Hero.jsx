import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Weave</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Go to your Automation Hub</ButtonLink>
            </Link>
          </Container>

        </Container>
        <p className={styles.subtitle}>
          
        </p>
      </div>
  );
};

export default Hero;
