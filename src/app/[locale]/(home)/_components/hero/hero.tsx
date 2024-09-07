import React from 'react';
import cx from 'classnames';
import styles from './hero.module.css';
import fonts from '@/styles/fonts.module.css';
import { useTranslations } from 'next-intl';
import ArrowEndIcon from '@/assets/icons/arrowEnd';
import GoNextCTA from './goNextCTA';
import HeroScene3D from './HeroScene3D/HeroScene3D';

const Hero = () => {
  //TODO: my abilities
  // Jeden duży kontener w którym będą kulki z logami poszczególnych
  //technologi coś w tym stylu https://codesandbox.io/p/sandbox/lusion-connectors-xy8c8z?file=%2Fsrc%2FApp.js%3A8%2C68-8%2C87
  //https://chriskalafatis.com/

  //TODO: my offer
  //usuwamy let's contact zostanie tylko its'time; trzeba zaciekawić obrazkiem ;
  //może mniej tekstów a więcej konkretów;

  const t = useTranslations('Home');
  return (
    <section className={styles.container}>
      <h1 className={cx(fonts.heading_500, styles.introduction)}>
        {t.rich('my_name_is_oliwer')}
      </h1>
      <div className={styles.content}>
        <HeroScene3D />
      </div>

      {/* <div className={styles.content}>
        <div className={cx(styles.block, styles.block__top)}>
          <span className={cx(fonts.heading_500, styles.subheading)}>
            {t('i_turn')}
          </span>
          <span className={cx(fonts.heading_700, styles.heading)}>
            {t('ideas')}
          </span>
          <span className={styles.arrow}>
            <div className={styles.arrowEnd}>
              <ArrowEndIcon />
            </div>
          </span>
        </div>

        <div className={cx(styles.block, styles.block__bottom)}>
          <span className={cx(fonts.heading_500, styles.subheading)}>
            {t('into')}
          </span>
          <span className={cx(fonts.heading_700, styles.heading)}>
            {t('reality')}
          </span>
          <span className={styles.arrow}>
            <div className={styles.arrowEnd}>
              <ArrowEndIcon />
            </div>
          </span>
        </div>
      </div> */}
      <GoNextCTA />
    </section>
  );
};

export default Hero;
