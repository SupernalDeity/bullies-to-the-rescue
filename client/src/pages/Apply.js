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
    <form onSubmit={handleFormSubmit}>
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
                        htmlFor="coapplicantage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant Age:
                      </label>
                      <input
                        type="text"
                        name="coapplicantage"
                        id="coapplicantage"
                        value={applyState.coapplicantage}
                        onChange={handleChange}
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
                        value={applyState.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="addresstwo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address (city, state, zip):
                      </label>
                      <input
                        type="text"
                        name="addresstwo"
                        id="addresstwo"
                        value={applyState.addresstwo}
                        onChange={handleChange}
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
                        value={applyState.email}
                        onChange={handleChange}
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
                        value={applyState.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="phonetype"
                        className="block text-sm font-medium text-gray-700"
                      >
                        The phone number is:
                      </label>
                      <select
                        id="phonetype"
                        name="phonetype"
                        value={applyState.phonetype}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Cell</option>
                        <option>Landline</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="housemembers"
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
                        name="housemembers"
                        id="housemembers"
                        value={applyState.housemembers}
                        onChange={handleChange}
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
                        value={applyState.oc}
                        onChange={handleChange}
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
                        value={applyState.employerinfo}
                        onChange={handleChange}
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
                        value={applyState.employerphone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coappoccupation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant's Occupation:
                      </label>
                      <input
                        type="text"
                        name="coappoccupation"
                        id="coappoccupation"
                        value={applyState.coappoccupation}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coappemployerinfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Co-Applicant's Employer & Address:
                      </label>
                      <input
                        type="text"
                        name="coappemployerinfo"
                        id="coappemployerinfo"
                        value={applyState.coappemployerinfo}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

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
                        value={applyState.dwellinginfo}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="landlordinfoname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Name
                      </label>
                      <input
                        type="text"
                        name="landlordinfo"
                        id="landlordinfoname"
                        value={applyState.landlordinfo.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="landlordinfonumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Number
                      </label>
                      <input
                        type="text"
                        name="landlordinfo.number"
                        id="landlordinfonumber"
                        value={applyState.landlordinfo.number}
                        onChange={handleChange}
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
                        value={applyState.fencedyard}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="stairs"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your home have stairs the bulldog would have to
                        climb? If so, please describe all stairs involved.
                      </label>
                      <input
                        type="text"
                        name="stairs"
                        id="stairs"
                        value={applyState.stairs}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="water"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have a pool, water feature, pond, lake or any
                        other body of water near your residence? If so, is there
                        a secure fence to keep your bulldog away from water
                        hazards?
                      </label>
                      <input
                        type="text"
                        name="water"
                        id="water"
                        value={applyState.water}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="airconditioninghome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your home air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="airconditioning"
                        id="airconditioninghome"
                        value={applyState.airconditioning.home}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="wheredogday"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept during the day?
                      </label>
                      <input
                        type="text"
                        name="wheredog"
                        id="wheredogday"
                        value={applyState.wheredog.day}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="wheredognight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept at night?
                      </label>
                      <input
                        type="text"
                        name="wheredog"
                        id="wheredognight"
                        value={applyState.wheredog.night}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="airconditioningcar"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your car air-conditioned?
                      </label>
                      <input
                        type="text"
                        name="airconditioning"
                        id="airconditioningcar"
                        value={applyState.airconditioning.car}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="allergy"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is anyone in your home allergic to dogs?
                      </label>
                      <input
                        type="text"
                        name="allergy"
                        id="allergy"
                        value={applyState.allergy}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="willingness"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All family members in favor of adopting? (emotionally
                        and financially willing and able to adopt) Please answer
                        honestly as our volunteers spend hours screening
                        applicants and need to focus on serious adopters.
                      </label>
                      <input
                        type="text"
                        name="willingness"
                        id="willingness"
                        value={applyState.family.willingness}
                        onChange={handleChange}
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
                        htmlFor="dogage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What age are you willing to adopt? Provide a
                        range.
                      </label>
                      <input
                        type="text"
                        name="dogage"
                        id="dogage"
                        value={applyState.dogage}
                        onChange={handleChange}
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
                        value={applyState.currentpets}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="medicalneeds"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to take a bulldog with extra medical
                        needs? If yes, what level of care would your family be
                        comfortable providing? If no, please mark "N/A".
                      </label>
                      <input
                        type="text"
                        name="medicalneeds"
                        id="medicalneeds" 
                        value={applyState.medicalneeds}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="adoptwhen"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How soon are you ready to adopt?
                      </label>
                      <input
                        type="text"
                        name="adoptwhen"
                        id="adoptwhen"
                        value={applyState.adoptwhen}
                        onChange={handleChange}
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
                        value={applyState.surrenderpet}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="adoptedanimal"
                        className="block text-sm font-medium text-gray-700"
                      >
                        If your family has adopted a rescue animal before,
                        please provide the type of animal, animal name and
                        contact information for that rescue:
                      </label>
                      <input
                        type="text"
                        name="adoptedanimal"
                        id="adoptedanimal"
                        value={applyState.adoptedanimal}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="animalfriends"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family pets get along with each other? If
                        not, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="animalfriends"
                        id="animalfriends"
                        value={applyState.animalfriends}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="bite"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Has your family ever owned a pet that has bitten
                        someone? If so, please describe the circumstances.
                      </label>
                      <input
                        type="text"
                        name="bite"
                        id="bite"
                        value={applyState.bite}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="heartworm"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What heartworm preventative does your family use? Please
                        have current proof of purchase available when requested.
                      </label>
                      <input
                        type="text"
                        name="heartworm"
                        id="heartworm"
                        value={applyState.heartworm}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="vetcare"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do all of your family's pets receive regular veterinary
                        care and are up-to-date on vaccinations?
                      </label>
                      <input
                        type="text"
                        name="vetcare"
                        id="vetcare"
                        value={applyState.vetcare}
                        onChange={handleChange}
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
                        value={applyState.vetinfo}
                        onChange={handleChange}
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
                        value={applyState.references}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="behavior"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What type of behavior in a Bulldog would make your
                        family not want to adopt him or her? What is your
                        definition of "aggression"? (PLEASE be honest.)
                      </label>
                      <input
                        type="text"
                        name="behavior"
                        id="behavior"
                        value={applyState.behavior}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="correction"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How would your family correct behavior problems that may
                        arise?
                      </label>
                      <input
                        type="text"
                        name="correction"
                        id="correction"
                        value={applyState.correction}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="crates"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What does your family feel is the proper use of crates
                        or cages?
                      </label>
                      <input
                        type="text"
                        name="crates"
                        id="crates"
                        value={applyState.crates}
                        onChange={handleChange}
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
                        value={applyState.trainingissues}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="commonhealthissues"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your family familiar with common bulldog health
                        issues? How much do you plan on spending a year on vet
                        care?
                      </label>
                      <input
                        type="text"
                        name="commonhealthissues"
                        id="commonhealthissues"
                        value={applyState.commonhealthissues}
                        onChange={handleChange}
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
                            name="heat"
                            type="radio"
                            value={applyState.questionare.heat}
                            onChange={handleChange}
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
                            name="heat"
                            type="radio"
                            value={applyState.questionare.heat}
                            onChange={handleChange}
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
                            name="heat"
                            type="radio"
                            value={applyState.questionare.heat}
                            onSelect={handleChange}
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
                        value={applyState.spayneuter}
                        onChange={handleChange}
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
    </form>
  );
};

export default Apply;
