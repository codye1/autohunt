import TextInput from '../../TextInput/TextInput';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section>
      <h1>Contact</h1>
      <div className={styles.communicationInfo}>
        <TextInput
          name="name"
          title="Name"
          type="name"
          placeholder="Full Name"
          errors={undefined}
        />
        <TextInput
          name="email"
          title="Email"
          type="email"
          placeholder="email@mail.com"
          errors={undefined}
        />
        <TextInput
          name="phone"
          title="Phone(Optional)"
          type="phone"
          placeholder="(000)-000-000"
          errors={undefined}
        />
      </div>
    </section>
  );
};

export default Contact;
