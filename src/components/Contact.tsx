import React from 'react';
import { IOnClickHandler } from '../types/types';
import './Contact.scss';

/* Typescript solution for optional parameters where at least one is required from SO (see answer by ford04)
  https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist */
export type TContact = {
  src: string;
  alt: string;
  title: string;
} & 
(
  | { link: string; action?: never }
  | { link?: never; action: IOnClickHandler }
);

export function Contact({ src, alt, title, link, action }: TContact) {
  const imageEle = (
    <img src={src} alt={alt} title={title} />
  );

  return (
    <div className='Contact'>
      {link && 
        <a href={link}>
          {imageEle}
        </a>
      }
      {!link && action &&
        <button onClick={action}>
          {imageEle}
        </button>
      }
    </div>
  );
}
