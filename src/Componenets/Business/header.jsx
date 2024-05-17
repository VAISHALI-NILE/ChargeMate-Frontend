import React from "react";
import './styles/Header.css';
import Nav from '../Home/Nav.jsx';
function Header()
{
    return(
        <>
        <div className="header-main">
        <div class="overlay"></div>
            <Nav />

            <div className="header">
                <h1>Host EV Fast Charging Stations <br /> for Your Customers</h1>
                <p>Attract new customers and build brand loyalty</p>
            </div>


        </div>
        <div className="second">
                <div class="container space-y-12"><div class="mx-auto max-w-7xl text-center"><h2 class="text-theme-base m-0 text-3xl font-bold [&amp;_img]:mx-auto [&amp;_img]:max-w-[360px] lg:text-5xl"><p>Optimal Factors for Hosting EV Fast Chargers</p></h2></div><dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 md:space-y-0"><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">24/7 Access to chargers</dd></div><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">Located in dense EV markets</dd></div><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">Space for electrical equipment</dd></div><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">Can dedicate at least three parking stalls to EV fast charging</dd></div><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">ADA accessibility (if applicable)</dd></div><div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#21A58D] lg:h-14 lg:w-14"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-white lg:h-8 lg:w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></div><p class="text-theme-base m-0 ml-16 text-lg font-bold leading-6 lg:ml-20 lg:text-2xl"></p></dt><dd class="text-theme-secondary ml-16 mt-2 text-base lg:ml-20 lg:text-xl">Convenient high traffic areas with public access
</dd></div></dl></div>
            </div>
        </>
    );
}

export default Header;