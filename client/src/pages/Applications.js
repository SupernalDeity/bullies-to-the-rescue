import React, {useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useQuery } from '@apollo/client'
import { APPLICATIONS } from '../utils/queries'
import Application from '../components/Application/';

function Applications() {
  const { loading, error, data} = useQuery(APPLICATIONS);
  const [showOne,setShowOne] = useState(false);
  const [selectedApplication,setSelectedApplication] = useState('');

  if(loading){
    return <div>
      Loading...
    </div>
  }

  console.log(data);

  const handleApplication = id => {
    setSelectedApplication(id);
    setShowOne(true);
  }

  if(showOne){
    return <Application id={selectedApplication} setShowOne={setShowOne}/>;
  }

  return <div className="border-t border-gray-200">
    <dl>
      {
        data.applications.map(application=>(
          <div key={application._id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {application.name} 
              <button onClick={()=>handleApplication(application._id)} className="bg-gray-900 text-white">View Application</button></dd>
          </div>
        ))
      }
    </dl>
  </div>

  // return (
  //       <div className="overflow-hidden bg-white shadow sm:rounded-lg">
  //         <div className="px-4 py-5 sm:px-6">
  //           <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
  //           <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
  //         </div>
  //         <div className="border-t border-gray-200">
  //           <dl>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Age</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  //               <dt className="text-sm font-medium text-gray-500">Full name</dt>
  //               <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
  //             </div>
  //           </dl>
  //         </div>
  //       </div>
  //     )
    }

export default Applications;