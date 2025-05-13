"use client"

import { useState, useEffect } from "react"

type Theme = "default" | "blue" | "purple" | "red"

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("default")

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove("theme-blue", "theme-purple", "theme-red")

    // Add the selected theme class (except for default which has no class)
    if (theme !== "default") {
      document.documentElement.classList.add(`theme-${theme}`)
    }
  }, [theme])

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Theme:</span>
      <div className="flex gap-2">
         <button
          onClick={() => setTheme("default")}
          className={`w-8 h-8 rounded-full bg-[#1fa37c] ${theme === "default" ? "ring-2 ring-offset-2 ring-primary" : ""}`}
          aria-label="Default theme"
        />

        <button
          onClick={() => setTheme("blue")}
          className={`w-8 h-8 rounded-full bg-[rgb(25,113,194)] ${theme === "blue" ? "ring-2 ring-offset-2 ring-[rgb(25,113,194)]" : ""}`}
          aria-label="Blue theme"
        />
        {/* <button
          onClick={() => setTheme("purple")}
          className={`w-8 h-8 rounded-full bg-[rgb(128,90,213)] ${theme === "purple" ? "ring-2 ring-offset-2 ring-[rgb(128,90,213)]" : ""}`}
          aria-label="Purple theme"
        />  */}
        <button
          onClick={() => setTheme("red")}
          className={`w-8 h-8 rounded-full bg-[rgb(237,28,36)] ${theme === "red" ? "ring-2 ring-offset-2 ring-[rgb(237,28,36)]" : ""}`}
          aria-label="Red theme"
        />
      </div>
    </div>
  )
}
