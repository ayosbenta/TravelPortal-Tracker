import React, { useState } from 'react';
import { Product } from '../../types';
import ProductTable from './ProductTable';
import ProductModal from './ProductModal';

const initialProducts: Product[] = [
    { id: 'prod-001', name: 'Galactic Getaway Package', price: 2999, category: 'Luxury Travel', status: 'Active', inventory: 15 },
    { id: 'prod-002', name: 'Coastal Cruiser System', price: 1500, category: 'Cruise System', status: 'Active', inventory: 30 },
    { id: 'prod-003', name: 'Mountain Trekker Essentials', price: 750, category: 'Adventure Gear', status: 'Inactive', inventory: 0 },
    { id: 'prod-004', name: 'Urban Explorer Pass', price: 499, category: 'City Tours', status: 'Active', inventory: 100 },
];

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);

    const handleOpenModal = (product: Product | null = null) => {
        setProductToEdit(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setProductToEdit(null);
        setIsModalOpen(false);
    };

    const handleSaveProduct = (product: Product) => {
        if (productToEdit) {
            setProducts(products.map(p => p.id === product.id ? product : p));
        } else {
            setProducts([...products, { ...product, id: `prod-${Date.now()}` }]);
        }
        handleCloseModal();
    };

    const handleDeleteProduct = (productId: string) => {
        if(window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== productId));
        }
    };

    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Products & Systems</h1>
                    <p className="mt-2 text-lg text-slate-400">Manage your travel products and systems.</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()}
                    className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Product
                </button>
            </header>

            <ProductTable products={products} onEdit={handleOpenModal} onDelete={handleDeleteProduct} />

            {isModalOpen && (
                <ProductModal
                    product={productToEdit}
                    onClose={handleCloseModal}
                    onSave={handleSaveProduct}
                />
            )}
        </div>
    );
};

export default ProductsPage;
