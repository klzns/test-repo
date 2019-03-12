import React from "react";
import { render } from "@vtex/vtex-scripts/test-utils";
import GraphqlComponent from "./GraphqlComponent";
import GET_BOOKS from './query.graphql'

test("should render mock graphql responses", async () => {
  const bookMock = {
    request: {
      query: GET_BOOKS,
    },
    result: {
      data: {
        books: [
          {
            id: 10,
            title: 'Hello',
          }
        ]
      }
    }
  }

  const { getByText } = render(<GraphqlComponent />, {
    graphql: { mocks: [bookMock] }
  });

  expect(getByText(/Loading/)).toBeDefined();

  await new Promise(resolve => setTimeout(resolve, 0))

  expect(getByText(/Hello/)).toBeDefined();
});
