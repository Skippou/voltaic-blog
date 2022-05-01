import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(newCategories => setCategories(newCategories));
      }, []); // run once

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className=' text-xl mb-8 font-semibold border-b pb-4'> 
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className='cursor-pointer block pb-2 mb-2'>
            {category.name}    
          </span> 
        </Link>
      ))}
    </div>
      
  )
}

export default Categories