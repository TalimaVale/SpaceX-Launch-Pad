/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchDetailsQuery
// ====================================================

export interface LaunchDetailsQuery_launch_links {
  __typename: "LaunchLinks";
  flickr_images: (string | null)[] | null;
  mission_patch: string | null;
}

export interface LaunchDetailsQuery_launch {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  details: string | null;
  links: LaunchDetailsQuery_launch_links | null;
}

export interface LaunchDetailsQuery {
  launch: LaunchDetailsQuery_launch | null;
}

export interface LaunchDetailsQueryVariables {
  id: string;
}
