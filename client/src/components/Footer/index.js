import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-center">
        <a href="https://www.facebook.com/b2trbullies/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" className="mr-3 h-8" alt="Facebook Logo" />
        </a>
        <a href="https://instagram.com/bullies2therescue?igshid=YmMyMTA2M2Y=" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/color/344/instagram-new--v1.png" className="mr-3 h-8" alt="Instagram Logo" />
        </a>
        <a href="https://www.tiktok.com/@bullies2therescue?_t=8WrSrTk9UlS&_r=1" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/nolan/344/tiktok.png" className="mr-3 h-8" alt="TikTok Logo" />
        </a>
        
        {/* <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://www.facebook.com/b2trbullies/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>

            <li>
                <a href="https://www.facebook.com/b2trbullies/" className="hover:underline">Contact</a>
            </li>
        </ul> */}
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.facebook.com/b2trbullies/" className="hover:underline">Bullies 2 The Rescue™</a>. All Rights Reserved.
    </span>
</footer>
  ); 
}; 

export default Footer;

