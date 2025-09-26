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
    title: 'Your own pace',
    Svg: require('@site/static/img/husky_moutain.svg').default,

    description: (
      <>
        This knowledge base is accessible to everyone for use at their own speed.
      </>
    ),
  },
  {
    title: 'Only the essentials',
    Svg: require('@site/static/img/husky_laptop.svg').default,
    description: (
      <>
        No lengthy text or paragraphs, just the key elements.
      </>
    ),
  },
  {
    title: 'Instructions that work',
    Svg: require('@site/static/img/husky_desk.svg').default,
    description: (
      <>
        Every practice, action, command, and code has been validated as working before being added to this repository.
      </>
    ),
  },
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
