// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { GraphQLClient, gql } from 'graphql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API

type Data = {
  name: string
}

export default function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    }
  })

  const query = gql`
    mutation CreateComment{$name: String!, $email: String!, $comment: String!, $slug: String!}
    createComment(
  `




  res.status(200).json({ name: 'John Doe' })
}
