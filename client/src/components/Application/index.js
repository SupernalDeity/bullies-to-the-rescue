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
      <button onClick={() => setShowOne(false)}>Return to Applications</button>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {Object.keys(data.application).map((key) => {
              if (typeof data.application[key] !== "object") {
                if(typeof data.application[key] === 'boolean'){
                  return (
                    <div
                      key={key}
                      className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {data.application[key]?'true':'false'}
                      </dd>
                    </div>
                  );
                }
                return (
                  <div
                    key={key}
                    className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {data.application[key]}
                    </dd>
                  </div>
                );
              }

              else {
                return <div className="border-t border-gray-200">
                {Object.keys(data.application[key]).map((k) => {
                  if(typeof data.application[key][k] === 'boolean'){
                    return (
                      <div
                        key={k}
                        className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt className="text-sm font-medium text-gray-500">{k}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {data.application[key][k]?'true':'false'}
                        </dd>
                      </div>
                    );
                  }
                  return (
                    k !== '__typename' ? <div
                      key={k}
                      className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt className="text-sm font-medium text-gray-500">{k}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {data.application[key][k]}
                      </dd>
                    </div> : 
                    <div
                    key={k}
                    className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-medium text-gray-500">Subsection</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {key}
                    </dd>
                  </div>

                  );
                })}
                </div>
              }
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Application;
