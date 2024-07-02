import React from "react";
import { Route, createRoutesFromElements } from "react-router";

import { Container } from "./Container";
import { Home } from "./Home";
import { Page } from "./Page";
import { WithLoader } from "./WithLoader";
import { WithLoaderChild } from "./WithLoaderChild";
import { PathValidator } from "./utils/PathValidator";

export const routes = createRoutesFromElements(
  <Route path="/" element={<Container />}>
    <Route index element={<Home />} />
    <Route path="page" element={<Page />} />
    <Route path="search" loader={WithLoader.loader} element={<WithLoader />} />
    <Route path="login" loader={WithLoader.loader} element={<WithLoader />} />
    <Route
      path="/:eventType/:eventName/:eventDate/events/:eventId"
      loader={WithLoader.loader}
      element={<WithLoader />}
    >
      <Route
        path="listings/:listingId"
        loader={WithLoaderChild.loader}
        element={<WithLoaderChild />}
      />
    </Route>

    <Route
      path=":slug"
      loader={WithLoader.loader}
      element={<PathValidator element={WithLoader} />}
    />
  </Route>
);
