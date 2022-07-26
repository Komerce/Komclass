import { ReactElement } from 'react';

export interface MenuList {
  id: number;
  name: string;
}
export interface ListIcon {
  id: number;
  component: ReactElement;
}
export interface ListSponsor {
  id: number;
  img: string;
  alt: string;
}
