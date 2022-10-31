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
    dwellinginfo: "",
    landlordname: "",
    landlordnumber: "",
    fencedyard: "",
    stairs: "",
    water: "",
    airconditioninghome: "",
    airconditioningcar: "",
    whereday: "",
    wherenight: "",
    allergy: "",
    familywillingness: "",
    familywhy: "",
    familychildren: "",
    familychildreninfo: "",
    familychildrensupervise: "",
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
    questionareheat: "",
    questionarefood: "",
    questionarepalate: "",
    questionareallergy: "",
    questionarespayneuter: "",
    questionareproccessing: "",
    questionarehearabout: "",
    questionarepreviouspurchase: "",
    questionaretravel: "",
    questionareappfee: "",
    questionareappvalid: "",
    questionarecommitment: "",
    questionaredonate: "",
    questionareaccuracy: "",
    questionarecomments: "",
    questionaredate: "",
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
    if (data) {
      return (
        <div
          className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3"
          role="alert"
        >
          Success! Your application is submitted.
        </div>
      );
    }
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
            <form action="#" method="POST" onSubmit={handleFormSubmit}>
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
                        value={applyState.occupation}
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
                        htmlFor="ownbulldog"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Have you ever owned a bulldog? If so, what type:
                      </label>
                      <input
                        type="text"
                        name="ownbulldog"
                        id="ownbulldog"
                        value={applyState.ownbulldog}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="medicalissues"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Please list any medical issues you have direct experience with for any dog you have personally owned:
                      </label>
                      <input
                        type="text"
                        name="medicalissues"
                        id="medicalissues"
                        value={applyState.medicalissues}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="otherissues"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Please list any other issues you have direct experience with for any dog you have personally owned:
                      </label>
                      <input
                        type="text"
                        name="otherissues"
                        id="otherissues"
                        value={applyState.otherissues}
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
                        htmlFor="landlordname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Name
                      </label>
                      <input
                        type="text"
                        name="landlordname"
                        id="landlordname"
                        value={applyState.landlordname}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="landlordnumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Landlord's Number
                      </label>
                      <input
                        type="text"
                        name="landlordnumber"
                        id="landlordnumber"
                        value={applyState.landlordnumber}
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
                        name="airconditioninghome"
                        id="airconditioninghome"
                        value={applyState.airconditioninghome}
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
                        name="airconditioningcar"
                        id="airconditioningcar"
                        value={applyState.airconditioningcar}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="whereday"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept during the day?
                      </label>
                      <input
                        type="text"
                        name="whereday"
                        id="whereday"
                        value={applyState.whereday}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="wherenight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Where would your bulldog be kept at night?
                      </label>
                      <input
                        type="text"
                        name="wherenight"
                        id="wherenight"
                        value={applyState.wherenight}
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
                        htmlFor="familywillingness"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All family members in favor of adopting? (emotionally
                        and financially willing and able to adopt) Please answer
                        honestly as our volunteers spend hours screening
                        applicants and need to focus on serious adopters.
                      </label>
                      <input
                        type="text"
                        name="familywillingness"
                        id="familywillingness"
                        value={applyState.familywillingness}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="familywhy"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Why do you wish to rescue?
                      </label>
                      <input
                        type="text"
                        name="familywhy"
                        id="familywhy"
                        value={applyState.familywhy}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="familychildren"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does the dog have to be good with children?
                      </label>
                      <input
                        type="text"
                        name="familychildren"
                        id="familychildren"
                        value={applyState.familychildren}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="familychildreninfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do childen visit you home? Ages and how often?
                      </label>
                      <input
                        type="text"
                        name="familychildreninfo"
                        id="familychildreninfo"
                        value={applyState.familychildreninfo}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="familychildrensupervise"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Are you willing to supervise the bulldog with children?
                      </label>
                      <input
                        type="text"
                        name="familychildrensupervise"
                        id="familychildrensupervise"
                        value={applyState.familychildrensupervise}
                        onChange={handleChange}
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
                            name="questionareheat"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareheat"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noheat"
                            name="questionareheat"
                            type="radio"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareheat"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkheat"
                            name="questionareheat"
                            type="radio"
                            value="not sure"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareheat"
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
                            name="questionarefood"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarefood"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nofood"
                            name="questionarefood"
                            type="radio"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarefood"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkfood"
                            name="questionarefood"
                            type="radio"
                            value="not sure"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarefood"
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
                            name="questionarepalate"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarepalate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nopalate"
                            name="questionarepalate"
                            type="radio"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarepalate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkpalate"
                            name="questionarepalate"
                            type="radio"
                            value="not sure"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarepalate"
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
                            name="questionareallergy"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noallergy"
                            name="questionareallergy"
                            type="radio"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idkallergy"
                            name="questionareallergy"
                            type="radio"
                            value="not sure"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareallergy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Not sure
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="questionarespayneuter"
                        className="block text-sm font-medium text-gray-700"
                      >
                        All Bulldogs adopted from Bullies 2 the Rescue will be
                        spayed/neutered before adoption placement is complete.
                        Does your family have questions or reservations about
                        this policy? If yes, please explain your concerns.
                      </label>
                      <input
                        type="text"
                        name="questionarespayneuter"
                        id="questionarespayneuter"
                        value={applyState.questionarespayneuter}
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
                            name="questionareproccessing"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareproccessing"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noappstatus"
                            name="questionareproccessing"
                            type="radio"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareproccessing"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="questionarehearabout"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How did you hear about Bullies 2 the Rescue? (ex:
                        Family, Friend, Facebook, Instagram, TikTok, Twitter,
                        Google, Local Event)
                      </label>
                      <input
                        type="text"
                        name="questionarehearabout"
                        id="questionarehearabout"
                        value={applyState.questionarehearabout}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="questionarepreviouspurchase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Have you applied to purchase from a breeder or adopt
                        from other rescue? Are you in any bulldog rehoming
                        Facebook groups? If so, please list. If no, "N/A"
                      </label>
                      <input
                        type="text"
                        name="questionarepreviouspurchase"
                        id="questionarepreviouspurchase"
                        value={applyState.questionarepreviouspurchase}
                        onChange={handleChange}
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
                            name="questionaretravel"
                            type="radio"
                            value="yes, no problem"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaretravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, no problem!
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="halfwaytravel"
                            name="questionaretravel"
                            type="radio"
                            value="meet me halfway"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaretravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I need someone to meet me halfway
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="notravel"
                            name="questionaretravel"
                            type="radio"
                            value="bring to me"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaretravel"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No, I want to hire someone to bring me my bulldog
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="idktravel"
                            name="questionaretravel"
                            type="radio"
                            value="unsure"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaretravel"
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
                            name="questionareappfee"
                            type="radio"
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareappfee"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, I undestand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noadoptfee"
                            name="questionareappfee"
                            type="radio"
                            value="I have not paid the adoption fee"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareappfee"
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
                            name="questionareappvalid"
                            type="radio"
                            value="I agree"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareappvalid"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            We/ I agree
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noagreement"
                            name="questionareappvalid"
                            type="radio"
                            value="I do NOT agree"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareappvalid"
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
                            name="questionarecommitment"
                            type="radio"
                            value="I agree"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarecommitment"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes, we/ I agree and understand
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="noagreement2"
                            name="questionarecommitment"
                            type="radio"
                            value="I do NOT agree"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionarecommitment"
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
                            name="questionaredonate"
                            type="radio"
                            value="Yes, I have donated"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaredonate"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="nofeepaid"
                            name="questionaredonate"
                            type="radio"
                            value="No, I have NOT donated"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionaredonate"
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
                            name="questionareaccuracy"
                            type="radio"
                            value="Yes"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareaccuracy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="yeskindaaccurate"
                            name="questionareaccuracy"
                            type="radio"
                            value="Yes, but I need to explain something on the interview"
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="questionareaccuracy"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes but I need to explain something on the interview
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="questionarecomments"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comments, Questions, or Concerns?
                      </label>
                      <input
                        type="text"
                        name="questionarecomments"
                        id="questionarecomments"
                        value={applyState.questionarecomments}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="questionaredate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date and time:
                      </label>
                      <input
                        type="text"
                        name="questionaredate"
                        id="questionaredate"
                        value={applyState.questionaredate}
                        onChange={handleChange}
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
      <div className='flex justify-center'>
        {renderForm()}
        {error && <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">Please make sure all questions are answered!</div>}
      </div>
    </>
  );
};

export default Apply;
