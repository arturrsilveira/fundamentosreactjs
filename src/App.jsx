import { Header } from "./components/Header";
import { Post } from "./Post" ;
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Artur Rafael da Silveira" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam a voluptatum architecto error iste blanditiis repudiandae? Molestias omnis provident assumenda error, consequuntur sit temporibus optio magnam corporis sunt eveniet?"
          />
          <Post 
            author="Simone da Silveira" 
            content="Nova foto"
          />
        </main>
      </div>
    </div>
    
  );
}