import React, { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useQuery } from '@apollo/client'
import { APPLICATIONS } from '../utils/queries'
import Application from '../components/Application/';
import Auth from '../utils/auth';

function Applications() {
  const { loading, error, data } = useQuery(APPLICATIONS);
  const [showOne, setShowOne] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState('');

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  console.log(data);

  const handleApplication = id => {
    setSelectedApplication(id);
    setShowOne(true);
  }

  if (!Auth.loggedIn() || !Auth.getProfile().data.admin) {
    return <div className="flex justify-center py-3">
      <h4>
      These are not the driods you are looking for!
      </h4>
    </div>
  }

  if (showOne) {
    return <Application id={selectedApplication} setShowOne={setShowOne} />;
  }

  return <div>
    <dl className="flex flex-wrap justify-center w-full">
      {
        data.applications.map(application => (
          <div key={application._id} className="px-4 py-5">
            <dt className="flex justify-center text-lg font-medium text-Black-500">Application: </dt>
            <dd className="flex justify-center mt-1 text-md text-gray-900">
              {application.name}'s Application
            </dd>
            <button onClick={() => handleApplication(application._id)} className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">View Application</button>
          </div>
        ))
      }
    </dl>
  </div>
}
export default Applications;