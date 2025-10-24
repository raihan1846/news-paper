import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className='loading loding-dots loding-xl'></span>}>
               <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;