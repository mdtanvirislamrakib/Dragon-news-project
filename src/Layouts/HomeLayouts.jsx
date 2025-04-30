import React from 'react';
import Header from '../components/Header/Header';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                <section className='left_nav'>

                </section>
                <section className='main'></section>
                <section className='right_nav'></section>
            </main>

        </div>
    );
};

export default HomeLayouts;