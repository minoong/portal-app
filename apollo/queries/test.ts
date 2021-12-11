import { gql } from '@apollo/client'
import { CATEGORY_FRAGEMNT, RESTAURANT_FRAGMENT } from 'apollo/fragments'

export const RESTAURANTS_QUERY = gql`
 query restaurantsPageQuery($input: RestaurantsInput!) {
  allCategories {
   ok
   error
   categories {
    ...CategoryParts
   }
  }
  restaurants(input: $input) {
   ok
   error
   totalPages
   totalResults
   results {
    ...RestaurantParts
   }
  }
 }
 ${RESTAURANT_FRAGMENT}
 ${CATEGORY_FRAGEMNT}
`
