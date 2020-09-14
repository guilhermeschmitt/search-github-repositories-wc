import React from 'react';
import { Container, Status, Message } from './style';

function NotFoundPage() {
  return (
    <Container>
      <Status>
        404
      </Status>
      <Message>
        This is not the web page you are looking for.
      </Message>
    </Container>
  )
}

export default NotFoundPage
