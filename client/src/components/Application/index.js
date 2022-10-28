import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { APPLICATION } from "../../utils/queries";

const Application = ({ id, setShowOne }) => {
  const { loading, error, data } = useQuery(APPLICATION, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div>
      <div className="flex justify-center py-4">
        <button className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => setShowOne(false)}>Return to Applications</button>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-center">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Applicant Information
            </h3>
          </div>
          <div className="flex justify-center">
            <p className="mt-1 max-w-2xl text-md text-gray-500">
              Personal details and application.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {Object.keys(data.application).map((key) => {
              if (typeof data.application[key] !== "object") {
                if (typeof data.application[key] === 'boolean') {
                  return (
                    <div
                      key={key}
                      className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt className="text-md font-medium text-Black-500">{key}</dt>
                      <dd className="mt-1 text-md text-Black-500 sm:col-span-2 sm:mt-0">
                        {data.application[key] ? 'true' : 'false'}
                      </dd>
                    </div>
                  );
                }
                return (
                  <div
                    key={key}
                    className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-md font-medium text-Black-500">{key}</dt>
                    <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                      {data.application[key]}
                    </dd>
                  </div>
                );
              }

              else {
                return <div className="border-t border-gray-200">
                  {Object.keys(data.application[key]).map((k) => {
                    if (typeof data.application[key][k] === 'boolean') {
                      return (
                        <div
                          key={k}
                          className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        >
                          <dt className="text-md font-medium text-Black-500">{k}</dt>
                          <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                            {data.application[key][k] ? 'true' : 'false'}
                          </dd>
                        </div>
                      );
                    }
                    return (
                      k !== '__typename' ? <div
                        key={k}
                        className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt className="text-md font-medium text-Black-500">{k}</dt>
                        <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                          {data.application[key][k]}
                        </dd>
                      </div> :
                        <div
                          key={k}
                          className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        >
                          <dt className="text-md font-medium text-Black-500">Subsection</dt>
                          <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                            {key}
                          </dd>
                        </div>

                    );
                  })}
                </div>
              }
            })}
          </dl>
          <div className="flex justify-center py-4">
            <button className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => setShowOne(false)}>Return to Applications</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
