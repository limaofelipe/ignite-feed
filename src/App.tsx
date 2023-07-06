import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/limaofelipe.png",
      name: "Felipe Lima",
      role: "Dev Junior"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content: 'Estou fazendo O programa ignite da rocketseat! 🚀'},
      { type: 'link', content: ''},           
    ],
    publishedAt: new Date('2023-07-1 17:02:54'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/IanaCris.png",
      name: "Iana Lima",
      role: "Dev Senior"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'iana.design/doctorcare'},           
    ],
    publishedAt: new Date('2023-06-23 19:32:54'),
  },
  
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


