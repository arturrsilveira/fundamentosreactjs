import {PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQFxprbrrlwugw/profile-displayphoto-shrink_100_100/0/1600274138294?e=1665014400&v=beta&t=WMsejbGvZ6T5fE23qU0q7awaa-ak8A54fSCUiQHohzY" 
                alt="Imagem de Perfil"/>

                <strong>Artur Rafael da Silveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}