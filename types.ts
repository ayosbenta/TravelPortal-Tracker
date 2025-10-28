export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  status: 'Active' | 'Inactive';
  inventory: number;
}
