export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: Status;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Item[];
  total: number;
}

export interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface ClientAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const statusValues = Object.freeze({
  DRAFT: 'Draft',
  PENDING: 'Pending',
  PAID: 'Paid',
} as const);

export type Status = (typeof statusValues)[keyof typeof statusValues];
