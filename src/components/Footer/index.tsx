import React from 'react';
import { categoriesData } from '_constant/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './index.module.css';

const developers = [
  {
    name: 'Sean Lum',
    linkedin: 'https://www.linkedin.com/in/jyjy98/',
    github: 'https://github.com/seanjyjy'
  },
  {
    name: 'Keane Chan',
    linkedin: 'https://www.linkedin.com/in/keanecjy/',
    github: 'https://github.com/keanecjy'
  },
  {
    name: 'Lim Jin Hao',
    linkedin: 'https://www.linkedin.com/in/jin-hao-l/',
    github: 'https://github.com/jinhao-l'
  }
];

const Footer: React.FC = () => {
  return (
    <div className={styles.footerOuter}>
      <div className={styles.footer} id={'footer'}>
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <div className={styles.footerTitle}>Categories</div>
            <div className={styles.categoriesGridContent}>
              {categoriesData.map((cat, index) => {
                return <p key={index}>{cat.name}</p>;
              })}
            </div>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.footerTitle}>Developers</div>
            <div className={styles.devGridContent}>
              {developers.map((dev, index) => {
                return (
                  <div key={index} className={styles.footerTeam}>
                    <p>{dev.name}</p>
                    <a
                      title={'Linkedin'}
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ paddingLeft: '5px' }}>
                      <FaLinkedin size={20} color={'#0e76a8'} />
                    </a>
                    <a
                      title={'Github'}
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ paddingLeft: '5px' }}>
                      <FaGithub size={20} color={'#211F1F'} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2021{'\n'}LetShop</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
