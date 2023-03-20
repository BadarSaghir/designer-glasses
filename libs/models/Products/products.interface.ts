import { ReactNode } from "react";

export interface ProductModel {
  id: string;
  name: string;
  prices?: string[];
  sku: string[];
  genders: string[];
  colors: string[];
  images: string[];
  shape: string[];
  frameType: string[];
  date: string;
  distance?: number;
  lensWidth?: number;
  templatelenght?: number;
  bridgeHeight?: number;
  lensHeight?: number;
  multifocal?: string[];
  warranties?: string[];
  description:string;
  promises?: {
    secure: { status: string;  endstring: 'Secure checkout' };
    support: { status: string,endstring: 'Hour Support' };
    warranty: { status: string;  endstring: 'Years Warranty' };
  };
  biofocal?: string[];
  advertisment: Advertisment;
}

export interface Advertisment {
  title: string;
  link: string;
  tryOn: boolean;
  type: string;
}
