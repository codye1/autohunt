import styles from './description.module.css';

interface IDescription {
  scroped: boolean;
  onClick: () => void;
  description: string;
}

const Description = ({ scroped, onClick, description }: IDescription) => {
  return (
    <>
      <section
        className={scroped ? styles.descriptionScroped : styles.description}
      >
        {scroped && <div className={styles.descriptionBackdrop}></div>}
        <h1>Description</h1>
        {description}
      </section>
      <button onClick={onClick}>{scroped ? 'Детальніше' : 'Скрити'}</button>
    </>
  );
};

export default Description;
