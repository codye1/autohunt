import styles from './detailsSection.module.css';

interface ICarDetailsCardSection {
  title: string;
  items: { title: string; value: string }[];
}

const DetailsSection = ({ title, items }: ICarDetailsCardSection) => {
  return (
    <section className={styles.detailsSection}>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <h4>{item.value}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DetailsSection;
