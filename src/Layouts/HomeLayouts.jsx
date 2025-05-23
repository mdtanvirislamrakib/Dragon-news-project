import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-5  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <LeftAside></LeftAside>

                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;