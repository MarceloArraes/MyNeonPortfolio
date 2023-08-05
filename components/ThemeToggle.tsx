'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const capitalizeFirstLetter = (word: string) => {
  if (!word) return 'Dark'
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleChangeToggleBttn = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    console.log('theme ', theme)
    if (!theme) setTheme('dark')
  }, [])

  return (
    <label
      htmlFor="toogleA"
      className="fixed left-5 top-20 z-10 cursor-pointer items-center"
    >
      <div className="relative">
        <input
          id="toogleA"
          checked={theme === 'light'}
          type="checkbox"
          className=" mb-1 h-4 w-10 appearance-none rounded-full bg-gray-400 shadow transition"
          onChange={handleChangeToggleBttn}
        />
        {/*           <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div> */}
        <div className="dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition"></div>
      </div>
      <div className="mb-3 ml-3 font-medium text-gray-700 dark:text-gray-200">
        {capitalizeFirstLetter(theme)}
      </div>
    </label>
  )
}

export { ThemeToggle }
