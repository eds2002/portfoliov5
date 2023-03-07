import { createClient } from 'next-sanity'
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: '2023-03-07',
  useCdn: false,
})
