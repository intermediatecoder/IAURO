import React, { useState } from 'react';

const Add = () => {
    const [inputValue, setInputValue] = useState({ category: '', amount: '', comment: '' });
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleAddOrEdit = () => {
        const { category, amount, comment } = inputValue;
        if (category && amount || comment) {
            const currentTime = new Date().toLocaleString();
            if (editIndex !== null) {
                const updatedItems = items.map((item, index) => {
                    if (index === editIndex) {
                        return { ...inputValue, updatedAt: currentTime }; 
                    } else {
                        return item; 
                    }
                });
                setItems(updatedItems);
                setEditIndex(null);
            } else {
                setItems([...items, { ...inputValue, createdAt: currentTime, updatedAt: currentTime }]);
            }
            setInputValue({ category: '', amount: '', comment: '' });
        }
    };

    const handleEdit = (index) => {
        setInputValue(items[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedItems = [...items]; 
        updatedItems.splice(index, 1); 
        setItems(updatedItems); 
    };

    // Calculate the total amount
    const getTotalAmount = () => {
        return items.reduce((total, item) => total + parseFloat(item.amount), 0);
    };

    return (
        <div className="text-center">
            <div className="mb-4 border border-red-600 rounded p-4">
                <select
                    name="category"
                    value={inputValue.category}
                    onChange={handleChange}
                    className="border rounded p-2 mr-2"
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Cab">Cab</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Investment">Investment</option>
                    <option value="Bills">Bills/Recharge</option>
                </select>

                <input
                    type="number"
                    name="amount"
                    value={inputValue.amount}
                    onChange={handleChange}
                    className="border rounded p-2 mr-2"
                    placeholder="Amount"
                />
                <input
                    type="text"
                    name="comment"
                    value={inputValue.comment}
                    onChange={handleChange}
                    className="border rounded p-2 mr-2"
                    placeholder="Comment"
                />
                <button
                    onClick={handleAddOrEdit}
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                >
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>

            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Category</th>
                        <th className="border border-gray-300 p-2">Amount</th>
                        <th className="border border-gray-300 p-2">Created At</th>
                        <th className="border border-gray-300 p-2">Updated At</th>
                        <th className="border border-gray-300 p-2">Comment</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-b border-gray-300">
                            <td className="border border-gray-300 p-2">{item.category}</td>
                            <td className="border border-gray-300 p-2">{item.amount}</td>
                            <td className="border border-gray-300 p-2">{item.createdAt}</td>
                            <td className="border border-gray-300 p-2">{item.updatedAt}</td>
                            <td className="border border-gray-300 p-2">{item.comment}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="bg-yellow-500 text-white rounded p-1 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white rounded p-1 hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display the total amount */}
            <div className="mt-4">
                <h2 className="text-xl font-bold">Total Amount: ₹{getTotalAmount()}</h2>
            </div>
        </div>
    );
};


export default Add;
