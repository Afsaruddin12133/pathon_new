import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import Home from "../features/Home/Home";
import MainLayout from './MainLayout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/profile",
      //   element: <Profiles />,
      // },
      // {
      //   path: "/user-profile/:user_id?",
      //   element: <UserProfiles />,
      // },
      // {
      //   path: "/transaction",
      //   element: <Transactions />,
      // },
      // {
      //   path: "/negotiation",
      //   element: <Negotiation />,
      // },
      // {
      //   path: "/signin",
      //   element: <Signin />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/privacy-policy",
      //   element: <Policy />,
      // },
      // {
      //   path: "/career",
      //   element: <Career />,
      // },
      // {
      //   path: "/blogs",
      //   element: <Blog />,
      // },
      // {
      //   path: "/support",
      //   element: <Helps />,
      // },
      // {
      //   path: "/terms",
      //   element: <Terms />,
      // },
      // {
      //   path: "/return-policy",
      //   element: <FreeCourse />,
      // },
      // {
      //   path: "/all-course",
      //   element: <AllCourse />,
      // },
      // {
      //   path: "/live-classes",
      //   element: <Lives1 />,
      // },
      // {
      //   path: "/live-class",
      //   element: <Lives2 />,
      // },
      // {
      //   path: "/live-class-me",
      //   element: <LClass />,
      // },
      // {
      //   path: "/my-enrolment",
      //   element: <MyEnrolment />,
      // },
      // {
      //   path: "/create-live-class",
      //   element: <Lives3 />,
      // },
      // {
      //   path: "/record-classes",
      //   element: <Records />,
      // },
      // {
      //   path: "/record-class",
      //   element: <Records2 />,
      // },
      // {
      //   path: "/record-class-me",
      //   element: <RClass />,
      // },
      // {
      //   path: "/create-record-classes",
      //   element: <Records3 />,
      // },
      // {
      //   path: "/problem-solving",
      //   element: <Problems />,
      // },
      // {
      //   path: "/solve-class",
      //   element: <Problems2 />,
      // },
      // {
      //   path: "/solve-class-me",
      //   element: <PClass />,
      // },
      // {
      //   path: "/create-solve-classes",
      //   element: <Problems3 />,
      // },
      // {
      //   path: "/for-you",
      //   element: <Recom />,
      // },
      // {
      //   path: "/details-live/:subject_id",
      //   element: <DetailLive />,
      // },
      // {
      //   path: "/details-record/:subject_id",
      //   element: <DetailRecord />,
      // },
      // {
      //   path: "/details-problem/:subject_id",
      //   element: <DetailProblem />,
      // },
      // {
      //   path: "/add-episode/:subject_id",
      //   element: <Episods />,
      // },
      // { path: "/update-class/:subject_id", element: <UpdateClassPage /> },
      // {
      //   path: "/update-record-class/:subject_id",
      //   element: <UpdateRecordClassPage />,
      // },
      // {
      //   path: "/update-problem-class/:subject_id",
      //   element: <UpdateProblemClassPage />,
      // },
    ],
  },
]);
