import { ApolloClient, InMemoryCache } from "@apollo/client/core"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", 
  cache: new InMemoryCache(),
})

export default client