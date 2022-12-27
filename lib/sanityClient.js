import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2kultebj',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk8wrERPjZyHNNZry7Fduc8ljos1lMCQUKHcgvK7J5HsQQGXOHzhIZQhxgzn1l9tuVHv2ByJjEGEtOL90t03iAB6KZLD4hQrJg1Q4IjFYgeL53bDsxJCGjy4xzYFMliowcgq9YXBMMQon9UDzHNseFDPfWQa61jIEg9yotTC4kmy0LBhzUw2',
  useCdn: false,
})
