// Node Modules
import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_APPLICATION } from "../utils/mutations";

const Apply = () => {
  const [applyState, setApplyState] = useState({
    name: "",
    age: "",
    coapplicant: "",
    coapplicantage: "",
    address: "",
    addresstwo: "",
    email: "",
    phone: "",
    phonetype: "",
    housemembers: "",
    occupation: "",
    employerinfo: "",
    employerphone: "",
    coappoccupation: "",
    coappemployerinfo: "",
    ownbulldog: "",
    medicalissues: "",
    otherissues: "",
    dogbehaviorissues: "",
    dwellinginfo: "",
    landlordinfo: {
      name: "",
      number: "",
    },
    fencedyard: "",
    stairs: "",
    water: "",
    airconditioning: {
      home: "",
      car: "",
    },
    wheredog: {
      day: "",
      night: "",
    },
    allergy: "",
    family: {
      willingness: "",
      why: "",
      children: "",
      childreninfo: "",
      childrensupervise: "",
    },
    dogage: "",
    currentpets: "",
    medicalneeds: "",
    adoptwhen: "",
    surrenderpet: "",
    adoptedanimal: "",
    animalfriends: "",
    bite: "",
    heartworm: "",
    vetcare: "",
    vetinfo: "",
    references: "",
    behavior: "",
    correction: "",
    crates: "",
    trainingissues: "",
    commonhealthissues: "",
    questionare: {
      heat: "",
      food: "",
      palate: "",
      allergy: "",
      spayneuter: "",
      proccessing: "",
      hearabout: "",
      previouspurchase: "",
      travel: "",
      appfee: "",
      appvalid: "",
      commitment: "",
      donate: "",
      accuracy: "",
      comments: "",
      date: "",
    },
  });
  const [addApplication, { error, data }] = useMutation(ADD_APPLICATION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setApplyState({
      ...applyState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addApplication({
        variables: { ...applyState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    // if (data) {
    //   return (
    //     // <div
    //     //   className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3"
    //     //   role="alert"
    //     // >
    //     //   Success! You may now head <Link to="/">back to the homepage.</Link>
    //     // </div>
    //   // );
    // }
  };

  return (
    <>
      <div className="bg-[url('https://i.imgur.com/zFvu6QI.jpg')] bg-fixed">
        <div className="max-w-3xl mx-auto mt-10 sm:mt-0 bg-white">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <div className="flex justify-center py-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl pb-5">
                  <span className="block xl:inline">Apply</span>{" "}
                  <span className="block text-indigo-600 xl:inline">Now</span>
                </h1>
              </div>
              <div className="flex justify-center py-3">
                <p className="ml-5 mt-1 text-md text-gray-600">
                  Please read the entire application before beginning and note
                  we do require a $25 non-refundable application fee that you
                  can pay by clicking the DONATE button at the top of this page.
                  Some application fields may not allow you as much space as
                  you'd like to provide lots of details. That's ok! We will
                  gladly discuss those details on your phone interview. Thank
                  you!
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
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={applyState.name}
                        onChange={handleChange}
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
                        value={applyState.age}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coapplicant"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant Full Name:
                      </label>
                      <input
                        type="text"
                        name="coapplicant"
                        id="coapplicant"
                        value={applyState.coapplicant}
                        onChange={handleChange}
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nodog"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, we have never had a bulldog
                          </label>
                        </div>
                        <div className="flex item s-center">
                          <input
                            id="english"
                            name="english"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                              id="tears"
                              name="tears"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="tears"
                              className="font-medium text-gray-700"
                            >
                              ACL Tears
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="addisons"
                              name="addisons"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="addisons"
                              className="font-medium text-gray-700"
                            >
                              Addison's Disease
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="allergyenv"
                              name="allergyenv"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="allergyenv"
                              className="font-medium text-gray-700"
                            >
                              Allergies: Environmetal
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="allergyfood"
                              name="allergyfood"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="allergyfood"
                              className="font-medium text-gray-700"
                            >
                              Allergies: Food
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="arthritis"
                              name="arthritis"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="arthritis"
                              className="font-medium text-gray-700"
                            >
                              Arthritis
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="pneumonia"
                              name="pneumonia"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="pneumonia"
                              className="font-medium text-gray-700"
                            >
                              Aspiration Pneumonia
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="ataxia"
                              name="ataxia"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="ataxia"
                              className="font-medium text-gray-700"
                            >
                              Ataxia
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hemotoma"
                              name="hemotoma"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hemotoma"
                              className="font-medium text-gray-700"
                            >
                              Aural Hemotoma
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="autoimmune"
                              name="autoimmune"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="autoimmune"
                              className="font-medium text-gray-700"
                            >
                              Autoimmune Disorders
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="bstones"
                              name="bstones"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="bstones"
                              className="font-medium text-gray-700"
                            >
                              Bladder Stones
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="blindness"
                              name="blindness"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="blindness"
                              className="font-medium text-gray-700"
                            >
                              Blindness
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="bloat"
                              name="bloat"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="bloat"
                              className="font-medium text-gray-700"
                            >
                              Bloat
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="tumors"
                              name="tumors"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="tumors"
                              className="font-medium text-gray-700"
                            >
                              Brain Tumors
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="cancer"
                              name="cancer"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cancer"
                              className="font-medium text-gray-700"
                            >
                              Cancer
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="cherry"
                              name="cherry"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cherry"
                              className="font-medium text-gray-700"
                            >
                              Cherry Eye
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="cleft"
                              name="cleft"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cleft"
                              className="font-medium text-gray-700"
                            >
                              Cleft Palate
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="crypt"
                              name="crypt"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="crypt"
                              className="font-medium text-gray-700"
                            >
                              Cryptorchid
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="cushings"
                              name="cushings"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cushings"
                              className="font-medium text-gray-700"
                            >
                              Cushing's Disease
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="deafness"
                              name="deafness"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="deafness"
                              className="font-medium text-gray-700"
                            >
                              Deafness
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="earinfection"
                              name="earinfection"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="earinfection"
                              className="font-medium text-gray-700"
                            >
                              Ear Infections
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="entropion"
                              name="entropion"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="entropion"
                              className="font-medium text-gray-700"
                            >
                              Entropion
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="gastritis"
                              name="gastritis"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="gastritis"
                              className="font-medium text-gray-700"
                            >
                              Gastritis
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="murmurs"
                              name="murmurs"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="murmurs"
                              className="font-medium text-gray-700"
                            >
                              Heart Murmurs
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="heartworm"
                              name="heartworm"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="heartworm"
                              className="font-medium text-gray-700"
                            >
                              Heart Worms
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="stroke"
                              name="stroke"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="stroke"
                              className="font-medium text-gray-700"
                            >
                              Heat Stroke/ Stress
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hemivert"
                              name="hemivert"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hemivert"
                              className="font-medium text-gray-700"
                            >
                              Hemivertebrae
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hoodvulva"
                              name="hoodvulva"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hoodvulva"
                              className="font-medium text-gray-700"
                            >
                              Hooded Vulva
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hotspot"
                              name="hotspot"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hotspot"
                              className="font-medium text-gray-700"
                            >
                              Hot Spots
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hydrocephalus"
                              name="hydrocephalus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hydrocephalus"
                              className="font-medium text-gray-700"
                            >
                              Hydrocephalus
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hypoplastic"
                              name="hypoplastic"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hypoplastic"
                              className="font-medium text-gray-700"
                            >
                              Hypoplastic Trachea
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="tailpocket"
                              name="tailpocket"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="tailpocket"
                              className="font-medium text-gray-700"
                            >
                              Infected Tail Pocket
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="cysts"
                              name="cysts"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cysts"
                              className="font-medium text-gray-700"
                            >
                              Interdigital Cysts
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="ivdd"
                              name="ivdd"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="ivdd"
                              className="font-medium text-gray-700"
                            >
                              Intervertebral disc disease (IVDD)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="intestinalblock"
                              name="intestinalblock"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="intestinalblock"
                              className="font-medium text-gray-700"
                            >
                              Intestinal Blockage
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="intestinalworm"
                              name="intestinalworm"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="intestinalworm"
                              className="font-medium text-gray-700"
                            >
                              Intestinal Worms
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="ibs"
                              name="ibs"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="ibs"
                              className="font-medium text-gray-700"
                            >
                              Irratable Bowel Syndrome
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="luxpatella"
                              name="luxpatella"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="luxpatella"
                              className="font-medium text-gray-700"
                            >
                              Luxating Patella
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="mamtumor"
                              name="mamtumor"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="mamtumor"
                              className="font-medium text-gray-700"
                            >
                              Mammary Tumors
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="megacolon"
                              name="megacolon"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="megacolon"
                              className="font-medium text-gray-700"
                            >
                              Mega Colon
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="megaesophagus"
                              name="megaesophagus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="megaesophagus"
                              className="font-medium text-gray-700"
                            >
                              Mega Esophagus
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="palatesurgery"
                              name="palatesurgery"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="palatesurgery"
                              className="font-medium text-gray-700"
                            >
                              Palate Surgery
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="pemphigus"
                              name="pemphigus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="pemphigus"
                              className="font-medium text-gray-700"
                            >
                              Pemphigus
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="prolapsedanus"
                              name="prolapsedanus"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="prolapsedanus"
                              className="font-medium text-gray-700"
                            >
                              Prolapsed Anus
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="prolapsedurethra"
                              name="prolapsedurethra"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="prolapsedurethra"
                              className="font-medium text-gray-700"
                            >
                              Polapsed Urethra
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="pulmsteno"
                              name="pulmsteno"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="pulmsteno"
                              className="font-medium text-gray-700"
                            >
                              Pulmonary Stenosis
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="pyometra"
                              name="pyometra"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="pyometra"
                              className="font-medium text-gray-700"
                            >
                              Pyometra
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="regurgitation"
                              name="regurgitation"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="regurgitation"
                              className="font-medium text-gray-700"
                            >
                              Regurgitation
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="ringworm"
                              name="ringworm"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="ringworm"
                              className="font-medium text-gray-700"
                            >
                              Ringworm
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="seizures"
                              name="seizures"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="seizures"
                              className="font-medium text-gray-700"
                            >
                              Seizures
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="spinab"
                              name="spinab"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="spinab"
                              className="font-medium text-gray-700"
                            >
                              Spina Bifida
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="stenoticnares"
                              name="stenoticnares"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="stenoticnares"
                              className="font-medium text-gray-700"
                            >
                              Stenotic Nares
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="swimmers"
                              name="swimmers"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="swimmers"
                              className="font-medium text-gray-700"
                            >
                              Swimmer's Syndrome
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="notail"
                              name="notail"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="notail"
                              className="font-medium text-gray-700"
                            >
                              Tail Amputation
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="tearstain"
                              name="tearstain"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="tearstain"
                              className="font-medium text-gray-700"
                            >
                              Tear Stains
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="tripod"
                              name="tripod"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="tripod"
                              className="font-medium text-gray-700"
                            >
                              Tripod (Missing Limb)
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="urinaryincontinence"
                              name="urinaryincontinence"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="urinaryincontinence"
                              className="font-medium text-gray-700"
                            >
                              Urinary Incontinence
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="uti"
                              name="uti"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="uti"
                              className="font-medium text-gray-700"
                            >
                              Urinary Tract Infections
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="absolutenothing"
                              name="absoluenothing"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="absolutenothing"
                              className="font-medium text-gray-700"
                            >
                              None of the above
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>

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
                              id="boundaryreact"
                              name="boundaryreact"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="boundaryreact"
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
                              id="destructive"
                              name="destructive"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="destructive"
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
                              id="dislikegender"
                              name="dislikegender"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="dislikegender"
                              className="font-medium text-gray-700"
                            >
                              Dislike of men or women in general
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="doordash"
                              name="doordash"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="doordash"
                              className="font-medium text-gray-700"
                            >
                              Door dashing
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="scarycar"
                              name="scarycar"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="scarycar"
                              className="font-medium text-gray-700"
                            >
                              Fearful of car rides/ car sickness
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="scaryvet"
                              name="scaryvet"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="scaryvet"
                              className="font-medium text-gray-700"
                            >
                              Feaful of vet
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="foodaggression"
                              name="foodaggression"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="foodaggression"
                              className="font-medium text-gray-700"
                            >
                              Food aggression
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="preydrive"
                              name="preydrive"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="preydrive"
                              className="font-medium text-gray-700"
                            >
                              High prey drive
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="humper"
                              name="humper"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="humper"
                              className="font-medium text-gray-700"
                            >
                              Humping
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="nocleaning"
                              name="nocleaning"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="nocleaning"
                              className="font-medium text-gray-700"
                            >
                              Intolerance of grooming/ ear cleaning/ eye drops
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hatekids"
                              name="hatekids"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hatekids"
                              className="font-medium text-gray-700"
                            >
                              Intolerance of kids
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="hatedogs"
                              name="hatedogs"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="hatedogs"
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
                              id="leashaggression"
                              name="leashaggression"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="leashaggression"
                              className="font-medium text-gray-700"
                            >
                              Leash aggression
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="myterritory"
                              name="myterritory"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="myterritory"
                              className="font-medium text-gray-700"
                            >
                              Marking territory
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="playbite"
                              name="playbite"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="playbite"
                              className="font-medium text-gray-700"
                            >
                              Play biting/ mouthing
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="eatpoop"
                              name="eatpoop"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="eatpoop"
                              className="font-medium text-gray-700"
                            >
                              Poop eating
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="strangerdanger"
                              name="strangerdanger"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="strangerdanger"
                              className="font-medium text-gray-700"
                            >
                              Reaction to strangers/ people entering the home
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="resourceguard"
                              name="resourceguard"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="resourceguard"
                              className="font-medium text-gray-700"
                            >
                              Resource guarding
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="seperationanxiety"
                              name="seperationanxiety"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="seperationanxiety"
                              className="font-medium text-gray-700"
                            >
                              Seperation Anxiety
                            </label>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="mytoys"
                              name="mytoys"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="mytoys"
                              className="font-medium text-gray-700"
                            >
                              Toy possession/ aggression
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="noprobs"
                              name="noprobs"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="noprobs"
                              className="font-medium text-gray-700"
                            >
                              None of the above
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="dwellinginfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Dwelling Information (rent, own, etc.)
                      </label>
                      <input
                        type="text"
                        name="dwellinginfo"
                        id="dwellinginfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="landlordinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Name and Number
                      </label>
                      <input
                        type="text"
                        name="landlordinfo"
                        id="landlordinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="fencedyard"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have a fenced yard? If so, please describe.
                      </label>
                      <input
                        type="text"
                        name="fencedyard"
                        id="fencedyard"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="stairinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your home have stairs the bulldog would have to
                        climb? If so, please describe all stairs involved.
                      </label>
                      <input
                        type="text"
                        name="stairinfo"
                        id="stairinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="waterfeature"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have a pool, water feature, pond, lake or any
                        other body of water near your residence? If so, is there
                        a secure fence to keep your bulldog away from water
                        hazards?
                      </label>
                      <input
                        type="text"
                        name="waterfeature"
                        id="waterfeature"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="homeac"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your home air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="homeac"
                        id="homeac"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="wherethdogday"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept during the day?
                      </label>
                      <input
                        type="text"
                        name="wherethdogday"
                        id="wherethdogday"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="wherethdognight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept at night?
                      </label>
                      <input
                        type="text"
                        name="wherethdognight"
                        id="wherethdognight"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="carac"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your car air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="carac"
                        id="carac"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="homeallergy"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is anyone in your home allergic to dogs?
                      </label>
                      <input
                        type="text"
                        name="homeallergy"
                        id="homeallergy"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="allinfavor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All family members in favor of adopting? (emotionally
                        and financially willing and able to adopt) Please answer
                        honestly as our volunteers spend hours screening
                        applicants and need to focus on serious adopters.
                      </label>
                      <input
                        type="text"
                        name="allinfavor"
                        id="allinfavor"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="whyudothis"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Why do you wish to rescue?
                      </label>
                      <input
                        type="text"
                        name="whyudothis"
                        id="whyudothis"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="goodwchild"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does the dog have to be good with children?
                      </label>
                      <input
                        type="text"
                        name="goodwchild"
                        id="goodwchild"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="childvisit"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do childen visit you home? Ages and how often?
                      </label>
                      <input
                        type="text"
                        name="childvisit"
                        id="childvisit"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="childsupervise"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to supervise the bulldog with children?
                      </label>
                      <input
                        type="text"
                        name="childsupervise"
                        id="childsupervise"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="adoptage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What age are you willing to adopt? Provide a
                        range.
                      </label>
                      <input
                        type="text"
                        name="adoptage"
                        id="adoptage"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="currentpets"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have any pets currently? If yes, please list all
                        animals they must get along with, including ALL
                        household pets, their ages, where they are now and if
                        they are spayed/neutered.
                      </label>
                      <input
                        type="text"
                        name="currentpets"
                        id="currentpets"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="extramedical"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to take a bulldog with extra medical
                        needs? If yes, what level of care would your family be
                        comfortable providing? If no, please mark "N/A".
                      </label>
                      <input
                        type="text"
                        name="extramedical"
                        id="extramedical"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="howsoon"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How soon are you ready to adopt?
                      </label>
                      <input
                        type="text"
                        name="howsoon"
                        id="howsoon"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="surrenderpet"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Has your family ever surrendered a pet to a rescue
                        organization or animal shelter?
                      </label>
                      <input
                        type="text"
                        name="surrenderpet"
                        id="surrenderpet"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="surrenderinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        If your family has adopted a rescue animal before,
                        please provide the type of animal, animal name and
                        contact information for that rescue:
                      </label>
                      <input
                        type="text"
                        name="surrenderinfo"
                        id="surrenderinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="petharmony"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family pets get along with each other? If
                        not, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="petharmony"
                        id="petharmony"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="petbites"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Has your family ever owned a pet that has bitten
                        someone? If so, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="petbites"
                        id="petbites"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="heartwormprevention"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What heartworm preventative does your family use? Please
                        have current proof of purchase available when requested.
                      </label>
                      <input
                        type="text"
                        name="heartwormprevention"
                        id="heartwormprevention"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="regularvetcare"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family's pets receive regular veterinary
                        care and are up-to-date on vaccinations?
                      </label>
                      <input
                        type="text"
                        name="regularvetcare"
                        id="regularvetcare"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="vetinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Vet's Office, Vet Name, Address and Phone Number (please
                        let your vet know we will be calling and will need
                        confirmation of history of vaccinations):
                      </label>
                      <input
                        type="text"
                        name="vetinfo"
                        id="vetinfo"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="references"
                        className="block text-sm font-medium text-gray-700"
                      >
                        References: List names and phone numbers of two people
                        who are not members of your household that can verify
                        your ability to take proper care of a rescued Bulldog.
                        (Include Name, Relationship, Years Known, Contact Info)
                      </label>
                      <input
                        type="text"
                        name="references"
                        id="references"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="aggressiondef"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What type of behavior in a Bulldog would make your
                        family not want to adopt him or her? What is your
                        definition of "aggression"? (PLEASE be honest.)
                      </label>
                      <input
                        type="text"
                        name="aggressiondef"
                        id="aggressiondef"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="behaviorcorrection"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How would your family correct behavior problems that may
                        arise?
                      </label>
                      <input
                        type="text"
                        name="behaviorcorrection"
                        id="behaviorcorrection"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="cratescages"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What does your family feel is the proper use of crates
                        or cages?
                      </label>
                      <input
                        type="text"
                        name="cratescages"
                        id="cratescages"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="trainingissues"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your family understand that rescued Bulldogs may
                        have house-training issues, especially at first? If not, 
                      </label>
                      <input
                        type="text"
                        name="trainingissues"
                        id="trainingissues"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="commonissues"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your family familiar with common bulldog health
                        issues? How much do you plan on spending a year on vet
                        care?
                      </label>
                      <input
                        type="text"
                        name="commonissues"
                        id="commonissues"
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
                            id="yesheat"
                            name="dogheat"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesheat"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noheat"
                            name="dogheat"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noheat"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkheat"
                            name="dogheat"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="idkheat"
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
                            id="yesfood"
                            name="premiumfood"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesfood"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nofood"
                            name="premiumfood"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nofood"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkfood"
                            name="premiumfood"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="idkfood"
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
                            id="yespalate"
                            name="softpalate"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yespalate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nopalate"
                            name="softpalate"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nopalate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkpalate"
                            name="softpalate"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="idkpalate"
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
                            id="yesallergy"
                            name="allergyaware"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noallergy"
                            name="allergyaware"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkallergy"
                            name="allergyaware"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="idkallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="spayneuter"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All Bulldogs adopted from Bullies 2 the Rescue will be
                        spayed/neutered before adoption placement is complete.
                        Does your family have questions or reservations about
                        this policy? If yes, please explain your concerns.
                      </label>
                      <input
                        type="text"
                        name="spayneuter"
                        id="spayneuter"
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
                            id="yesappstatus"
                            name="appstatus"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesappstatus"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noappstatus"
                            name="appstatus"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noappstatus"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="hearsay"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How did you hear about Bullies 2 the Rescue? (ex:
                        Family, Friend, Facebook, Instagram, TikTok, Twitter,
                        Google, Local Event)
                      </label>
                      <input
                        type="text"
                        name="hearsay"
                        id="hearsay"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="otheradoption"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Have you applied to purchase from a breeder or adopt
                        from other rescue? Are you in any bulldog rehoming
                        Facebook groups? If so, please list. If no, "N/A"
                      </label>
                      <input
                        type="text"
                        name="otheradoption"
                        id="otheradoption"
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
                            id="yestravel"
                            name="willingtotravel"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yestravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, no problem!
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="halfwaytravel"
                            name="willingtotravel"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="halfwaytravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I need someone to meet me halfway
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="notravel"
                            name="willingtotravel"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="notravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I want to hire someone to bring me my bulldog
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idktravel"
                            name="willingtotravel"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="idktravel"
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
                            id="yesadoptfee"
                            name="adoptfee"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesadoptfee"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, I undestand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noadoptfee"
                            name="adoptfee"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noadoptfee"
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
                            id="yesagreement"
                            name="agreement"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesagreement"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            We/ I agree
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noagreement"
                            name="agreement"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noagreement"
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
                            id="yesagreement2"
                            name="agreement2"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesagreement2"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, we/ I agree and understand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noagreement2"
                            name="agreement2"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="noagreement2"
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
                            id="yesfeepaid"
                            name="feepaid"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesfeepaid"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nofeepaid"
                            name="feepaid"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="nofeepaid"
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
                            id="yesaccurate"
                            name="accurate"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yesaccurate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="yeskindaaccurate"
                            name="accurate"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="yeskindaaccurate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes but I need to explain something on the interview
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="commentsquestionsconcerns"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comments, Questions, or Concerns?
                      </label>
                      <input
                        type="text"
                        name="commentsquestionsconcerns"
                        id="commentsquestionsconcerns"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="datetime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date and time:
                      </label>
                      <input
                        type="text"
                        name="datetime"
                        id="datetime"
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
      </div>
    </>
  );
};

export default Apply;
