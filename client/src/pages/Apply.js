// Node Modules
import React from 'react';

const Apply = () => {
  return (
        <>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
    
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Apply Now!</h3>
                  <p className="mt-1 text-sm text-gray-600">Please read the entire application before beginning and note we do require a $25 non-refundable application fee that you can pay by clicking the DONATE button at the top of this page. Some application fields may not allow you as much space as you'd like to provide lots of details. That's ok! We will gladly discuss those details on your phone interview. Thank you!</p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                            Full name:
                          </label>
                          <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                            Age:
                          </label>
                          <input
                            type="text"
                            name="age"
                            id="age"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="coapp-name" className="block text-sm font-medium text-gray-700">
                          Co-Applicant Full Name:
                          </label>
                          <input
                            type="text"
                            name="coapp-name"
                            id="coapp-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="coapp-age" className="block text-sm font-medium text-gray-700">
                          Co-Applicant Age:
                          </label>
                          <input
                            type="text"
                            name="coapp-age"
                            id="coapp-age"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address (number, street, apt):
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                          Address (city, state, zip):
                          </label>
                          <input
                            type="text"
                            name="address2"
                            id="address2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email (PLEASE MAKE SURE THIS IS CORRECT): 
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number (PLEASE MAKE SURE THIS IS CORRECT): 
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">
                            The phone number is:
                          </label>
                          <select
                            id="phone2"
                            name="phone2"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>Cell</option>
                            <option>Landline</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="household" className="block text-sm font-medium text-gray-700">
                          Please list all household members other than the applicants (names, age & relationship). Due to a recent policy change, we can no longer adopt to homes with children under the age of 10. We understand your child may be good with other dogs but we value the safety of your family and the well-being of our rescued bulldogs, whose history with children is often unknown. Please do not ask us to change our policy.
                          </label>
                          <input
                            type="text"
                            name="household"
                            id="household"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                          Applicant's Occupation:
                          </label>
                          <input
                            type="text"
                            name="occupation"
                            id="occupation"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="employerinfo" className="block text-sm font-medium text-gray-700">
                          Applicant's Employer & Address:
                          </label>
                          <input
                            type="text"
                            name="employerinfo"
                            id="employerinfo"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
    
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                  <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                        <legend className="sr-only">By Email</legend>
                        <div className="text-base font-medium text-gray-900" aria-hidden="true">
                          By Email
                        </div>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-medium text-gray-700">
                                Comments
                              </label>
                              <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="candidates" className="font-medium text-gray-700">
                                Candidates
                              </label>
                              <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="offers" className="font-medium text-gray-700">
                                Offers
                              </label>
                              <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                        <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                              Everything
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                              Same as email
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                              No push notifications
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
};

export default Apply;
