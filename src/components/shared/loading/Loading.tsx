import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles['loading-wrapper']} id='loading'>
      <div className={styles['loading']}>
        <div style={{ '--i': 1, backgroundColor: 'tomato' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 2, backgroundColor: '#5037c9' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 3, backgroundColor: '#1ae2ac' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 4, backgroundColor: '#e29f1a' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 5, backgroundColor: '#e21ab9' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 6, backgroundColor: '#c395bf' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 7, backgroundColor: '#4032bb' } as React.CSSProperties} className={styles['rect']}></div>
        <div style={{ '--i': 8, backgroundColor: '#0fe0b7' } as React.CSSProperties} className={styles['rect']}></div>
      </div>
    </div>
  )
}

export default Loading
