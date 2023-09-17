import Stripe from "stripe"

export type UserDetails = {
  id: string
  first_name: string
  last_name: string
  full_name?: string
  avatar_url?: string
  billing_address?: Stripe.Address
  payment_methods?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type][]
}

export type Product = {
  id: string
  active?: boolean
  name?: string
  description?: string
  images?: string[]
  metadata?: Stripe.Metadata
}

export type Price = {
  id: string
  product_id?: string
  acitve?: boolean
  description?: string
  unit_amount?: number
  currency?: string
  type?: Stripe.Price.Type
  interval?: Stripe.Price.Recurring.Interval
  interval_count?: number
  trail_period_days?: number | null
  metadata?: Stripe.Metadata
  products?: Stripe.Product[]
}

export type Subscription = {
  id: string
  user_id: string
  status?: Stripe.Subscription.Status
  metadata?: Stripe.Metadata
  price_id?: string
  quantity?: number
  cancel_at_period_end?: boolean
  created: string
  current_period_start: string
  current_period_end: string
  ended_at?: string
  cancel_at?: string
  canceled_at?: string
  trail_start?: string
  trial_end?: string
  prices?: Price[] // Example use:
}