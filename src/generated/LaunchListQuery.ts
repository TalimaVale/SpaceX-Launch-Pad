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
  mission_patch_small: string | null;
  video_link: string | null;
  flickr_images: (string | null)[] | null;
}

export interface LaunchListQuery_launchesPast_rocket_rocket_engines {
  __typename: "RocketEngines";
  type: string | null;
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
}

export interface LaunchListQuery_launchesPast_rocket_rocket_first_stage {
  __typename: "RocketFirstStage";
  burn_time_sec: number | null;
  engines: number | null;
  reusable: boolean | null;
}

export interface LaunchListQuery_launchesPast_rocket_rocket_second_stage {
  __typename: "RocketSecondStage";
  burn_time_sec: number | null;
  engines: number | null;
}

export interface LaunchListQuery_launchesPast_rocket_rocket {
  __typename: "Rocket";
  description: string | null;
  engines: LaunchListQuery_launchesPast_rocket_rocket_engines | null;
  first_stage: LaunchListQuery_launchesPast_rocket_rocket_first_stage | null;
  second_stage: LaunchListQuery_launchesPast_rocket_rocket_second_stage | null;
}

export interface LaunchListQuery_launchesPast_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
  rocket: LaunchListQuery_launchesPast_rocket_rocket | null;
}

export interface LaunchListQuery_launchesPast_ships {
  __typename: "Ship";
  name: string | null;
  home_port: string | null;
}

export interface LaunchListQuery_launchesPast {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  details: string | null;
  launch_date_utc: any | null;
  launch_site: LaunchListQuery_launchesPast_launch_site | null;
  links: LaunchListQuery_launchesPast_links | null;
  rocket: LaunchListQuery_launchesPast_rocket | null;
  ships: (LaunchListQuery_launchesPast_ships | null)[] | null;
}

export interface LaunchListQuery {
  launchesPast: (LaunchListQuery_launchesPast | null)[] | null;
}

export interface LaunchListQueryVariables {
  limit: number;
}
