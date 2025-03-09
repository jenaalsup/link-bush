'use client'

import { FormEvent, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    console.log('Signing up...') // Add this
    const { data, error } = await supabase.auth.signUp({ email, password })
    console.log('Response:', { data, error }) // Add this
  }

  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-medium text-foreground">Sign Up</h2>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm text-foreground">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-foreground">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border p-2"
            />
          </div>

          <button
            type="submit"
            onClick={handleClick}  // Add this to test button clicks
            className="w-full rounded bg-primary text-white p-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}