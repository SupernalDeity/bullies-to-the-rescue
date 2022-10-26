import React from 'react';

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://www.facebook.com/b2trbullies/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" class="mr-3 h-8" alt="Facebook Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Check Our Facebook!</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://www.facebook.com/b2trbullies/" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>

            <li>
                <a href="https://www.facebook.com/b2trbullies/" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.facebook.com/b2trbullies/" class="hover:underline">Bullies 2 The Rescue™</a>. All Rights Reserved.
    </span>
</footer>
  );
};

export default Footer;

