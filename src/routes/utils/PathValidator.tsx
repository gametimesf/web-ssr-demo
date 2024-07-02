import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound";

type PathValidatorProps = {
  element: React.ComponentType;
};

export const PathValidator = ({ element: Component }: PathValidatorProps) => {
  const { slug } = useParams();

  if (!slug || !slug.endsWith("-tickets")) {
    return <NotFound />; // * Catch-all route
  }

  return <Component />;
};
