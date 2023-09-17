"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  
    createPagesBrowserClient,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs"

import { Database } from "@/types/database.types"

type SupabaseContext = {
  supabase: SupabaseClient<Database> // supabase is a client of type SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabase] = useState(() => createPagesBrowserClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export default SupabaseProvider

export const useSupabase = () => {
    const context = useContext(Context)
    
    if (context === undefined) {
        throw new Error("useSupabase must be used inside SupabaseProvider")
    }
    
    return context
    }
    