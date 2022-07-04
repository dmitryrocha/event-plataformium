import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4svv96n2lbc01yx3gjo8ba8/master',
    cache: new InMemoryCache(),
});