import { gql } from '@apollo/client'

export const CREATE_ACCOUNT_MUTATION = gql`
 mutation createAccountMutation($createAccountInput: CreateAccountInput!) {
  createAccount(input: $createAccountInput) {
   ok
   error
  }
 }
`
export const LOGIN_MUTATION = gql`
 mutation loginMutation($loginInput: LoginInput!) {
  login(input: $loginInput) {
   ok
   token
   error
  }
 }
`
