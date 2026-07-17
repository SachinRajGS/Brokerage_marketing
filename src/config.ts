/**
 * Central site configuration — every phone number, address and API key
 * used across the website lives here. Edit this ONE file to update them.
 */
export const SITE = {
  name: 'Subbaraju Brokerage',
  legalName: 'Subbaraju Brokerage',
  tagline: 'Agricultural commodity brokers in Challakere, Karnataka',

  // Phone / WhatsApp
  phoneDisplay: '+91 98452 22718',
  phoneRaw: '+919845222718',
  whatsappNumber: '919845222718', // country code + number, digits only (used in wa.me links)

  email: 'gbsr1501@gmail.com',

  // Location
  address: {
    locality: 'Challakere',
    district: 'Chitradurga District',
    region: 'Karnataka',
    postalCode: '577522',
    country: 'IN',
  },
  areaServed: ['Karnataka', 'Andhra Pradesh', 'Tamil Nadu'],

  // Supabase (lead capture). The anon key is safe to expose publicly —
  // Row Level Security prevents it from reading the leads table.
  supabaseUrl: 'https://lkkugjayqsgffntpjwcx.supabase.co',
  supabaseAnonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxra3VnamF5cXNnZmZudHBqd2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwMDA2MTAsImV4cCI6MjA5ODU3NjYxMH0.EL91x3wA8NYbWZOJ2-4yXa_ropRwbpxC0uznyO6PIZY',
} as const;

export const SUBMIT_LEAD_URL = `${SITE.supabaseUrl}/functions/v1/submit-lead`;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}`;
