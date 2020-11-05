import React, { useState } from 'react';
import styles from './ToDo.module.css';
import logo from '../../download.png';

const ToDo = () => {
  const [post, setPost] = useState([]);

  const newPost = (event) => {
    event.preventDefault();
    const input = document.getElementById('input');
    setPost([...post, input.value]);
    input.value = '';
  };

  const filteredItem = (deletedItem)=>{
    setPost(post.filter((item)=>item !== deletedItem))
  }

  return (
    <article className={styles.article}>
      <section className={styles.container}>
        <form className={styles.writeContainer}>
          <div className={styles.writeDiv}>
            <input
              id='input'
              type='text'
              name='post'
              placeholder='Write here...'
              className={styles.input}
            ></input>
            <hr className={styles.hrLine} />
          </div>
          <button type='submit' onClick={newPost} className={styles.btnAdd}>
            ADD
          </button>
        </form>
      </section>
      <section>
        <ul>
          {post.map((p) => (
            <li key={p} className={styles.li}><input type='checkbox' className={styles.checkbox}/> <p className={styles.p} >{p}</p> <img  src={logo} onClick={()=>{filteredItem(p)}} className={styles.logo}/></li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default ToDo;
