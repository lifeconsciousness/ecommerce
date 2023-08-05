import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skN5OfmULqk0r9UlSde7MopZ15B5WgmE2XSSvuabsg3yTAhEzvlqvKCO8hLnEYYt2m5liksnL79VeEk3SzaQiGBNz3BzgkRIhYy2FooCaJ84OdLJhJa1CQyko6TZfAoHzFgiLCCCDQaE9dKQ3X7g7iifiYAjQv85XSI4TmhYdZIvTiSxw9NV",
})
