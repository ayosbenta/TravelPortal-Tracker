import React, { useState, useEffect } from 'react';
import { Product } from '../../types';

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
    onSave: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSave }) => {
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({
        name: '',
        price: 0,
        category: '',
        status: 'Active',
        inventory: 0,
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        } else {
             setFormData({ name: '', price: 0, category: '', status: 'Active', inventory: 0 });
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' || name === 'inventory' ? Number(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: product?.id || '' });
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl w-full max-w-lg shadow-2xl shadow-cyan-500/10">
                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">{product ? 'Edit Product' : 'Add New Product'}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="name">Product Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="category">Category</label>
                                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="price">Price (USD)</label>
                                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required min="0"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="inventory">Inventory</label>
                                <input type="number" id="inventory" name="inventory" value={formData.inventory} onChange={handleChange} required min="0"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="status">Status</label>
                                <select id="status" name="status" value={formData.status} onChange={handleChange}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900/50 px-6 py-4 rounded-b-xl flex justify-end space-x-3">
                        <button type="button" onClick={onClose}
                            className="bg-slate-700 text-slate-300 font-bold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                            Cancel
                        </button>
                        <button type="submit"
                            className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20">
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
