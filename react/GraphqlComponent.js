import React from 'react'
import { graphql } from 'react-apollo'
import GET_BOOKS from './query.graphql'

function HelloWorld({ data }) {
  return (
    <div>
      {data.loading
        ? 'Loading'
        : data.books.map(book =>
          <div key={book.id}>{book.title}</div>
        )
      }
    </div>
  )
}

export default graphql(GET_BOOKS)(HelloWorld)