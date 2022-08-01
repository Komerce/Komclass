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
export interface ListBanner extends ListSponsor {
  title: string;
  location: string;
  time: string;
}
export interface DataReviewMentor {
  id: number;
  name: string;
  desc: string;
}
export interface DataPrice {
  id: number;
  desc: string;
}
export interface DataHope {
  id: number;
  image: string;
  desc: string;
}
export interface DataReview {
  id: number;
  name: string;
  address: string;
  desc: string;
}
export interface ItemSponsor {
  id: number;
  image: string;
}