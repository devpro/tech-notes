import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'At your Own Pace',
    Svg: require('@site/static/img/husky_moutain.svg').default,
    description: (
      <>
       This knowledge base is accessible to everyone, allowing users to learn at their preferred speed and style.
      </>
    )
  },
  {
    title: 'Only the essentials',
    Svg: require('@site/static/img/husky_laptop.svg').default,
    description: (
      <>
        No lengthy text or paragraphs - instead a concise, ordered structure with key points and links to official resources.
      </>
    )
  },
  {
    title: 'Proven Solutions',
    Svg: require('@site/static/img/husky_desk.svg').default,
    description: (
      <>
        Every instruction and recommendation come, and has been validated, in real-world work environments.
      </>
    )
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
