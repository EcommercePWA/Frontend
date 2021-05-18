import styles from './Search.module.css';
import { IoSearchOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import { useState, useEffect, useRef } from 'react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDown = useRef<HTMLDivElement | null>(null);
  const fixArray = [
    'Hello',
    'world',
    'How',
    'Are',
    'You',
    'a',
    'b',
    'c',
    'qweradsfasdf',
    'LASFOADSFertyertyertyeryASFF',
    'AHAzxczcDSFDKAJHlkhjtryJKDASHqweqwewqeqweLSHFKALSHF',
    'AHADSFDKAJ123412344JKDASHqweqwewqeJSFHJAKDSLFHKJDALSHFKALSHF',
    'AH123asADqweqw`ewqeFJKKALJSFHJAKDSLFHKJDALSHFKALSHF',
    'AHadsasdADSFDKAJHSFJKDASHF`JKKALJSq123ertuertywrtwqwtrwerqwerqLFHKJDALSHFKALSHF',
    'AH123123SFqweqwewqeqweFHJAKDSLFHKJDALSHFKALSHF',
    'AHADSFDKAJqweqwewqasdfasdfsdfDSLFHKJDALSHFKALSHF'
  ];

  const [arr, setArr] = useState<string[]>(fixArray);

  const debounce = (func: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    let timer: NodeJS.Timeout;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(e);
      }, 400);
    };
  };

  const filterArray = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newList = fixArray.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setArr(newList);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: Event) => {
      let temp = e.target as Node;
      // MAY NOT BE THE MOST ELEGANT SOLUTION, BUT IT STILL WORKS
      if (dropDown.current && temp.nodeName !== 'INPUT' && !dropDown.current?.contains(temp)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className={styles.search}>
        <form className={styles.form}>
          <input
            placeholder="Find your item"
            className={styles.input}
            onInput={debounce(filterArray)}
            onFocus={() => setIsOpen(true)}
            spellCheck="false"
          />
        </form>
        <div className={styles.glassHolder}>
          <IoSearchOutline />
        </div>
        {isOpen && (
          <div className={styles.dropDownList} ref={dropDown}>
            {arr.map((word, i) => (
              <p className={styles.dropDownListElement} key={word + i}>
                {word}
              </p>
            ))}
          </div>
        )}
      </div>
    </IconContext.Provider>
  );
};

export default Search;
