import React from 'react';
import { Product } from '../../types';

interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (productId: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit, onDelete }) => {
    const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

    return (
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-slate-800 border-b border-slate-700">
                    <tr>
                        <th className="p-4 text-sm font-semibold text-slate-300">Product Name</th>
                        <th className="p-4 text-sm font-semibold text-slate-300">Category</th>
                        <th className="p-4 text-sm font-semibold text-slate-300">Price</th>
                        <th className="p-4 text-sm font-semibold text-slate-300">Inventory</th>
                        <th className="p-4 text-sm font-semibold text-slate-300">Status</th>
                        <th className="p-4 text-sm font-semibold text-slate-300 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {products.length > 0 ? products.map(product => (
                        <tr key={product.id} className="hover:bg-slate-800 transition-colors">
                            <td className="p-4 font-medium text-white">{product.name}</td>
                            <td className="p-4 text-slate-400">{product.category}</td>
                            <td className="p-4 text-slate-400">{formatCurrency(product.price)}</td>
                            <td className="p-4 text-slate-400">{product.inventory}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${product.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                    {product.status}
                                </span>
                            </td>
                            <td className="p-4 text-center">
                                <button onClick={() => onEdit(product)} className="text-blue-400 hover:text-blue-300 mr-4" title="Edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button onClick={() => onDelete(product.id)} className="text-red-400 hover:text-red-300" title="Delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={6} className="text-center p-8 text-slate-500">No products found. Add one to get started!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
