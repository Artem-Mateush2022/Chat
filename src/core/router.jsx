import React from 'react';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { ChatEmpty, ChatMain, Messages } from '../components/chat';


import { UnauthorizedRoute, ProtectedRoute } from './routes';
import { RoutePath } from './constants';

const createRouter = process.env.ENV === 'gh-pages' ? createHashRouter : createBrowserRouter;

export * from './routes';
export * from './constants';

export default createRouter([
  {
    path: RoutePath.Home,
    element: (
      <ProtectedRoute>
        <ChatMain />
      </ProtectedRoute>
    ),
    children: [
      {
        element: <ChatMain />,
        children: [
          {
            index: true,
            element: <ChatEmpty />,
          },
          {
            path: ':chatId',
            element: <Messages />,
          },
        ]
      },
    ],
  },
]);