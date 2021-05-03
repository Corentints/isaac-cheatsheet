import React from 'react'
import Navbar from '../components/UI/Navbar'

export default function Home() {
    return (
        <div>
        <Navbar />
        <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-center mb-8 text-white">The Binding of Isaac: Rebirth Cheatsheet</h1>
        <div className="mt-1">
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            placeholder="Bob's Rotten Head"
          />
        </div>
      <p className="mt-4 text-sm text-gray-300">
      All game data is taken from <a href="https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki" className="pointer-click">Rebirth_Wiki (fandom)</a>
    </p>
    </div>
        </div>

    )
}
