import { cache } from "react"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Database } from "@/types/database.types"

// -------- Server-side Supabase Client -------- //

// Create a new Supabase Client instance for server-side rendering
export const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
)

// -------- Server-side functions -------- //

// Get the user session
export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

// Get the user details
export async function getUserDetails() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: userDetails } = await supabase
      .from("users")
      .select("*")
      .single()
    return userDetails
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

// Get the user subscription
export async function getSubscription() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*, prices(*, products(*))")
      .in("status", ["trialing", "active"])
      .maybeSingle()
      .throwOnError()
    return subscription
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

// Get active products with prices
export const getActiveProductsWithPrices = async () => {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase
    .from("products")
    .select("*, prices(*)")
    .eq("active", true)
    .eq("prices.active", true)
    .order("metadata->index")
    .order("unit_amount", { foreignTable: "prices" })

  if (error) {
    console.log(error.message)
  }
  return data ?? []
}
