// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = String(process.env.NEXT_PUBLIC_GRAPHQL_API);

type Data = {
  name: string
}

export default async function comments(

  

  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {name,email,slug,comment} = req.body;
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}){id}
    }
  `
  const result = graphQLClient.request(query, req.body)
}
