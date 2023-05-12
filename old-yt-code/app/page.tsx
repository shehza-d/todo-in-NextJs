import Image from "next/image";
import { Inter } from "@next/font/google";
import TodoList from "../components/TodoList";
import AddNewTodo from "../components/addNewToDo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <p>
          Todo App by&nbsp;
          <a className={styles.code} href="https://twitter.com/shehza_d_">
            SHEHZAD
          </a>
        </p>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
     
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
      <hr />

      <div className={styles.center}>
        <AddNewTodo />
        <TodoList />
      </div>
    </main>
  );
}
