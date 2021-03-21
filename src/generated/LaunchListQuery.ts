/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchListQuery
// ====================================================

export interface LaunchListQuery_launchesPast_launch_site {
  __typename: "LaunchSite";
  site_name_long: string | null;
}

export interface LaunchListQuery_launchesPast_links {
  __typename: "LaunchLinks";
  flickr_images: (string | null)[] | null;
}

export interface LaunchListQuery_launchesPast {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  launch_date_utc: any | null;
  launch_site: LaunchListQuery_launchesPast_launch_site | null;
  details: string | null;
  links: LaunchListQuery_launchesPast_links | null;
}

export interface LaunchListQuery {
  launchesPast: (LaunchListQuery_launchesPast | null)[] | null;
}

export interface LaunchListQueryVariables {
  limit: number;
}
