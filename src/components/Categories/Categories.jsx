import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch("/categories.json").then(result => result.json())

const Categories = () => {

    const categories = use(categoriesPromise)
    console.log(categories);


    return (
        <div>
            <h1 className='font-bold'>All Categories</h1>
            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map(category => <NavLink key={category.id} className={`hover:bg-base-200 py-3 rounded-md font-semibold  text-left pl-10 text-accent transition-all`} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;