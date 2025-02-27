"use client"

import React from "react"
import { useFormStatus } from "react-dom"

export function AnalyseButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600 outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                 disabled:opacity-50 disabled:cursor-not-allowed 
                 transition-all duration-200 font-medium cursor-pointer"
    >
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  )
}
