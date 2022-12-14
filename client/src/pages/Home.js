// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users" />
    }
  }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* <polygon points="50,0 90,0 50,100 0,100" /> */}
          </svg>
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl pb-5">
                <span className="block xl:inline">Bullies</span>{' '}
                <span className="block text-indigo-600 xl:inline">2 the Rescue</span>
              </h1>
              <p className='indent-10'>
                Welcome to Bullies 2 the Rescue.  We are headquartered in North Carolina, in a pet supply store that is owned with the Rescue. Carolina Pet Pantry/Bullies 2 the Rescue is located in Indian Trail.  We also have satellite offices in South Carolina, Alabama and we cover Virginia and Maryland as well.
                We are in need of volunteers, donations, supplies and support. We rely solely on donations for the care and treatment of the rescued Bulldogs that are admitted to our organization.
                We have approximately 50+ English or French Bulldogs in foster care at any given time.
                We provide our fosters food, treats, supplements, medical care, training and harnesses and leashes.
              </p>
              <div>
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 indent-10">
                In <span className='text-red-600'>2021</span>, B2TR rescued <span className='text-red-600'>172</span> bulldogs in need. We had <span className='text-red-600'>176</span> adoptions, <span className='text-red-600'>64</span> were foster fails and <span className='text-red-600'>57</span> were previous adopters!
                In <span className='text-red-600'>2021</span>, we adopted to families in <span className='text-red-600'>14</span> states <span className='text-indigo-600'>(DE, FL, GA, MA, MD, NC, NJ, OH, PA, SC, TN, TX, VA, WI)</span> and the <span className='text-indigo-600'>District of Columbia</span>!
                We adopt to all U.S. states as long as you are able to come to us to adopt. We are based in <span className='text-indigo-600'>NC</span>.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href='/Dogs'
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Adopt a Bulldog
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.ctfassets.net/sfnkq8lmu5d7/45un3KmPuTLyUNDwDUOkh7/b17ba9b45cdec97c257be30e18517ec2/2022-05-18_English_Bulldogs_Face_Extinction_Stocksy_txp680f3471PHQ300_Medium_192223.jpg?w=1000&h=750&fl=progressive&q=80&fm=jpg"
          alt="BullDog"
        />
      </div>
    </div>
  );
};

export default Home;
