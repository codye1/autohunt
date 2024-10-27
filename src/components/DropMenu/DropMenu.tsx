'use client';

import drop from '@/public/drop.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './dropMenu.module.css';

interface IDropMenu {
  items: string[];
  defaultSelectedItem?: string;
  title: string;
  name: string;
  className?: string;
}

const DropMenu = ({
  items,
  defaultSelectedItem,
  name,
  title,
  className,
}: IDropMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem || '');
  const [search, setSearch] = useState('');

  const dropdownRef = useRef<HTMLLabelElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <label
      ref={dropdownRef}
      className={`${styles.dropMenu} ${className ? className : ''}`}
    >
      <h1>{title}</h1>
      <button
        type="button"
        onClick={() => {
          setIsOpen((value) => !value);
        }}
      >
        {selectedItem.length > 0 ? selectedItem : 'Select a model'}
        <Image
          src={drop}
          alt="drop icon"
          className={isOpen ? styles.isOpen : ''}
        ></Image>
      </button>
      {isOpen && (
        <menu>
          <input
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <ul>
            {items
              .filter((item) =>
                item.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
              )
              .map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                >
                  {item}
                </li>
              ))}
          </ul>
        </menu>
      )}

      <input type="hidden" name={name} value={selectedItem} />
    </label>
  );
};

export default DropMenu;
