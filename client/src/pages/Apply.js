// Node Modules
import React from "react";

const Apply = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 sm:mt-0">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <div className="flex justify-center py-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl pb-5">
                  <span className="block xl:inline">Apply</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Now</span>
                </h1>
              </div>
              <div className="flex justify-center py-3">
                <p className="ml-5 mt-1 text-md text-gray-600">
                  Please read the entire application before beginning and note we 
                  do require a $25 non-refundable application fee that you can pay
                  by clicking the DONATE button at the top of this page. Some
                  application fields may not allow you as much space as you'd like
                  to provide lots of details. That's ok! We will gladly discuss
                  those details on your phone interview. Thank you!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid gap-6">
                    <div className="col-span-8 sm:col-span-4">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="coapp-name"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="coapp-age"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="address2"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="phone2"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="household"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Please list all household members other than the
                        applicants (names, age & relationship). Due to a recent
                        policy change, we can no longer adopt to homes with
                        children under the age of 10. We understand your child
                        may be good with other dogs but we value the safety of
                        your family and the well-being of our rescued bulldogs,
                        whose history with children is often unknown. Please do
                        not ask us to change our policy.
                      </label>
                      <input
                        type="text"
                        name="household"
                        id="household"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-medium text-gray-700"
                      >
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
                      <label
                        htmlFor="employerinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Applicant's Employer & Address:
                      </label>
                      <input
                        type="text"
                        name="employerinfo"
                        id="employerinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Employer's Phone:
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coapp-employerinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant's Occupation:
                      </label>
                      <input
                        type="text"
                        name="coapp-employerinfo"
                        id="coapp-employerinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coapp-employerinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant's Employer & Address:
                      </label>
                      <input
                        type="text"
                        name="coapp-employerinfo"
                        id="coapp-employerinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Has your family ever owned a bulldog?
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, we have never had a bulldog
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            English
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="french"
                            name="french"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="french"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            French
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="olde-english"
                            name="olde-english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="olde-english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Olde English
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="american"
                            name="american"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="american"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            American
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="mix"
                            name="mix"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="mix"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Mix
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <div
                        className="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        Please check any medical issues you have direct
                        experience with for any dog you have personally owned:
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
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              ACL Tears
                            </label>
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
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Addison's Disease
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Allergies: Environmetal
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Allergies: Food
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Arthritis
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Aspiration Pneumonia
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Ataxia
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Aural Hemotoma
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Autoimmune Disorders
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Bladder Stones
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Blindness
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Bloat
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Brain Tumors
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Cancer
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Cherry Eye
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Cleft Palate
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Cryptorchid
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Cushing's Disease
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Deafness
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Ear Infections
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Entropion
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Gastritis
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Heart Murmurs
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Heart Worms
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Heat Stroke/ Stress
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Hemivertebrae
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Hooded Vulva
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Hot Spots
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Hydrocephalus
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Hypoplastic Trachea
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Infected Tail Pocket
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Interdigital Cysts
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intervertebral disc disease (IVDD)
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intestinal Blockage
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intestinal Worms
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Irratable Bowel Syndrome
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Luxating Patella
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Mammary Tumors
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Mega Colon
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Mega Esophagus
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Palate Surgery
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Pemphigus
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Prolapsed Anus
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Polapsed Urethra
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Pulmonary Stenosis
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Pyometra
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Regurgitation
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Ringworm
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Seizures
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Spina Bifida
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Stenotic Nares
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Swimmer's Syndrome
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Tail Amputation
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Tear Stains
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Tripod (Missing Limb)
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Urinary Incontinence
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Urinary Tract Infections
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Other medical issues not listed above?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <div
                        className="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        How many of the following behaviors do you have direct
                        experience in dealing with for any dogs you have been
                        responsible for:
                      </div>
                      <div className="mt-4 space-y-4">
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Boundary reactivity (crate aggression, climbing or
                              knocking down babygates)
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Destructive behaviors (chewing shoes, doors,
                              baseboards, furniture)
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Dislike of men or women in general
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Door dashing
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Fearful of car rides/ car sickness
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Feaful of vet
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Food aggression
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              High prey drive
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Humping
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intolerance of grooming/ ear cleaning/ eye drops
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intolerance of kids
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Intolerance of other dogs (either selective or
                              perceived “dog aggressive”)
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Leash aggression
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Marking territory
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Play biting/ mouthing
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Poop eating
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Reaction to strangers/ people entering the home
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Resource guarding
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Seperation Anxiety
                            </label>
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
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Toy possession/ aggression
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Dwelling Information (rent, own, etc.)
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Name and Number
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have a fenced yard? If so, please describe.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your home have stairs the bulldog would have to
                        climb? If so, please describe all stairs involved.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have a pool, water feature, pond, lake or any
                        other body of water near your residence? If so, is there
                        a secure fence to keep your bulldog away from water
                        hazards?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your home air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept during the day?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept at night?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your car air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is anyone in your home allergic to dogs?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All family members in favor of adopting? (emotionally
                        and financially willing and able to adopt) Please answer
                        honestly as our volunteers spend hours screening
                        applicants and need to focus on serious adopters.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Why do you wish to rescue?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does the dog have to be good with children?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do childen visit you home? Ages and how often?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to supervise the bulldog with children?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What age are you willing to adopt? If unsure, provide a
                        range.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have any pets currently? If yes, please list all
                        animals they must get along with, including ALL
                        household pets, their ages, where they are now and if
                        they are spayed/neutered.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to take a bulldog with extra medical
                        needs? If yes, what level of care would your family be
                        comfortable providing? If no, please mark "N/A".
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How soon are you ready to adopt?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Has your family ever surrendered a pet to a rescue
                        organization or animal shelter?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        If your family has adopted a rescue animal before,
                        please provide the type of animal, animal name and
                        contact information for that rescue:
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family pets get along with each other? If
                        not, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Has your family ever owned a pet that has bitten
                        someone? If so, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What heartworm preventative does your family use? Please
                        have current proof of purchase available when requested.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family's pets receive regular veterinary
                        care and are up-to-date on vaccinations?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vet's Office, Vet Name, Address and Phone Number (please
                        let your vet know we will be calling and will need
                        confirmation of history of vaccinations):
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        References: List names and phone numbers of two people
                        who are not members of your household that can verify
                        your ability to take proper care of a rescued Bulldog.
                        (Include Name, Relationship, Years Known, Contact Info)
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What type of behavior in a Bulldog would make your
                        family not want to adopt him or her? What is your
                        definition of "aggression"? (PLEASE be honest.)
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How would your family correct behavior problems that may
                        arise?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What does your family feel is the proper use of crates
                        or cages?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your family understand that rescued Bulldogs may
                        have house-training issues, especially at first?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your family familiar with common bulldog health
                        issues? How much do you plan on spending a year on vet
                        care?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Are bulldogs good in the heat?
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="french"
                            name="french"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="french"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Are you aware that bulldogs require premium food?
                        Average cost are $75.00 a month.
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="french"
                            name="french"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="french"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Do you know what an elongated soft palate is and why
                        that makes bulldogs different?
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="french"
                            name="french"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="french"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Are you aware that 99% of all bulldog are allergic to
                        chicken, grains and potatoes?
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="french"
                            name="french"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="french"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All Bulldogs adopted from Bullies 2 the Rescue will be
                        spayed/neutered before adoption placement is complete.
                        Does your family have questions or reservations about
                        this policy? If yes, please explain your concerns.
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        Do you understand that it will take a minimum of 5-6
                        weeks to process this application? To check your
                        application status, you agree to email us at
                        applications@bullies2therescue.com instead of messaging
                        FB, IG, or texting?
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How did you hear about Bullies 2 the Rescue? (ex:
                        Family, Friend, Facebook, Instagram, TikTok, Twitter,
                        Google, Local Event)
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Have you applied to purchase from a breeder or adopt
                        from other rescue? Are you in any bulldog rehoming
                        Facebook groups? If so, please list. If no, "N/A"
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        I understand that I must be willing and able to travel
                        to Charlotte, NC to adopt.
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, no problem!
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I need someone to meet me halfway
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I want to hire someone to bring me my bulldog
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Unsure, will need to discuss during the phone
                            interview
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        I understand that application fee ($25) and adoption
                        fees (generally range from $600-900) are non-negotiable
                        and non-refundable. Deposits and payment plans are not
                        accepted.
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, I undestand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            There's an adoption fee?
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        We/I understand this application, if approved, is valid
                        for one year. If we/I have not adopted within that
                        timeframe, we/I will re-apply and pay an additional
                        application fee. *
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            We/ I agree
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            We/ I do NOT agree
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        By submitting this application, we/I agree that I have
                        read this entire application and that adoption is a
                        serious life-long commitment to which the entire family
                        agrees. We/I understand that B2TR is a volunteer-run
                        organization and these volunteers will spend hours
                        thoroughly screening our/my application. It may take 5-6
                        weeks to be contacted for a phone interview. We/I
                        understand that if the Submit button is NOT RED, then
                        we/I need to review my application and answer EVERY
                        question. I also agree that I will email
                        applications@bullies2therescue.com to check my
                        application status.
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, we/ I agree and understand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I didn't read it, I just want a cute bulldog
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        I have paid a non-refundable $25 application fee by
                        clicking the Donate button on this website. You may
                        include payment confirmation in the Comments section
                        below or email a screenshot of payment confirmation to
                        applications@bullies2therescue.com
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6 sm:col-span-4">
                      <legend className="contents text-base font-medium text-gray-700">
                        I attest that all answers on this application are
                        accurate and complete. I understand that if any of my
                        answers are found to be false or misleading by B2TR, my
                        application will be denied and closed.
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nodog"
                            name="nodog"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="english"
                            name="english"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="english"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes but I need to explain something on the interview
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comments, Questions, or Concerns?
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="employerphone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date and time:
                      </label>
                      <input
                        type="text"
                        name="employerphone"
                        id="employerphone"
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
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default Apply;
