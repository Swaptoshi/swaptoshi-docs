import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fair-Launched",
    Svg: require("@site/static/img/undraw_analytics.svg").default,
    description: (
      <>
        Find out how Swaptoshi was launched fairly and dive into its tokenomics.
        See how Swaptoshi promotes fairness, transparency, and encourages
        maximum contribution.
      </>
    ),
  },
  {
    title: "Community-Driven",
    Svg: require("@site/static/img/undraw_community.svg").default,
    description: (
      <>
        See how Swaptoshi centers the community in its growth. Explore our
        decentralized governance, treasury management, and DAO initiatives that
        empower everyone to participate.
      </>
    ),
  },
  {
    title: "Klayr DEX",
    Svg: require("@site/static/img/undraw_crypto_portfolio.svg").default,
    description: (
      <>
        Discover the advanced features of our DEX, inspired by industry best
        practices. Learn how Klayr SDK’s scalable blockchain technology powers a
        powerful and efficient trading experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
