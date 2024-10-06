import type { Metadata } from "next";
import styles from "./page.module.css"
export const metadata: Metadata = {
  title: "AutoHunt | Login",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=>{
  return (
        <div className={styles.layout}>
          {children}
        </div>
  );
}

export default RootLayout
