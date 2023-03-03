import React from "react";
import { createBrowserRouter, useParams, } from 'react-router-dom';

import Empty from "../../components/chat/Empty";
import { MessagesRoom } from '../../components/chat/Room';
import App from "../../App"


//const { roomId } = useParams();


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ':roomId', 
        element: <MessagesRoom />
      },
      {
        index: true,
        element: <Empty />
      }
    ]
  }
]);
