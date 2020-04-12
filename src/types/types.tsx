import { MouseEvent, FormEvent } from 'react';

export interface IOnClickHandler {
  (event: MouseEvent): void;
}

export interface IOnSubmitHandler {
  (event: FormEvent): void;
}

export interface IisDisplayed {
  isDisplayed: boolean;
}
