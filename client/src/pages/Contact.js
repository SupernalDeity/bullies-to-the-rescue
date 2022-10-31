import React from 'react'
const products = [
  {
    id: 1,
    name: '',
    imageSrc: 'https://static.wixstatic.com/media/624003_f78a9f79be2245bf9a3485dfbcfd5e03.jpg/v1/fill/w_410,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/624003_f78a9f79be2245bf9a3485dfbcfd5e03.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
]

function Contact() {
  return (
    <>
      <div className="bg-[url('https://i.imgur.com/zFvu6QI.jpg')] bg-fixed">
        <div className="max-w-3xl mx-auto mt-10 sm:mt-0 bg-white">

          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="mailto:cannaestia@gmail.com" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="bg-white flex justify-center">

                    <h2 className="sr-only">Products</h2>

                    <div className=''>
                      {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          First name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter First Name'
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          Last name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Last Name'
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          Email address
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm peer"
                          placeholder='Enter a Valid Email'
                          required
                        />
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                       Please provide a valid email address.
                      </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          Country
                          </span>
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Country'
                          required
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          Street address
                          </span>
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Current Address'
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          City
                          </span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Current City'
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          State / Province
                          </span>
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Current State'
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          ZIP / Postal code
                          </span>
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder='Enter Zipcode'
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                      Message
                      </span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="How can Bullies 2 the Rescue help you?"
                        defaultValue={''}
                        required
                      />
                    </div>
                    <div className='flex justify-center'>
                      <p className="mt-2 text-sm text-gray-500">
                        We are not a breeder. If you are inquiring about how to adopt, please submit an adoption application on the Adopt a Bull tab.
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center'>
                    <button
                      type="submit"
                      value="Send"
                      className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact