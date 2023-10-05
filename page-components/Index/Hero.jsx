import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>CogitAuth</span>
          <span className={styles.mongodb}></span>
          <span>Verify your Drops!</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Cogita Feeds</ButtonLink>
            </Link>
          </Container>

          </Container>
        </Container>
        <p className={styles.subtitle}>
          
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
