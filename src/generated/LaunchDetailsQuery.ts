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
  mission_patch_small: string | null;
  video_link: string | null;
}

export interface LaunchDetailsQuery_launch_launch_site {
  __typename: "LaunchSite";
  site_name_long: string | null;
}

export interface LaunchDetailsQuery_launch_rocket_rocket_engines {
  __typename: "RocketEngines";
  type: string | null;
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
}

export interface LaunchDetailsQuery_launch_rocket_rocket_first_stage {
  __typename: "RocketFirstStage";
  burn_time_sec: number | null;
  engines: number | null;
  reusable: boolean | null;
}

export interface LaunchDetailsQuery_launch_rocket_rocket_second_stage {
  __typename: "RocketSecondStage";
  burn_time_sec: number | null;
  engines: number | null;
}

export interface LaunchDetailsQuery_launch_rocket_rocket {
  __typename: "Rocket";
  description: string | null;
  engines: LaunchDetailsQuery_launch_rocket_rocket_engines | null;
  first_stage: LaunchDetailsQuery_launch_rocket_rocket_first_stage | null;
  second_stage: LaunchDetailsQuery_launch_rocket_rocket_second_stage | null;
}

export interface LaunchDetailsQuery_launch_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
  rocket: LaunchDetailsQuery_launch_rocket_rocket | null;
}

export interface LaunchDetailsQuery_launch_ships {
  __typename: "Ship";
  name: string | null;
  home_port: string | null;
}

export interface LaunchDetailsQuery_launch {
  __typename: "Launch";
  id: string | null;
  links: LaunchDetailsQuery_launch_links | null;
  mission_name: string | null;
  details: string | null;
  launch_date_utc: any | null;
  launch_site: LaunchDetailsQuery_launch_launch_site | null;
  rocket: LaunchDetailsQuery_launch_rocket | null;
  ships: (LaunchDetailsQuery_launch_ships | null)[] | null;
}

export interface LaunchDetailsQuery {
  launch: LaunchDetailsQuery_launch | null;
}

export interface LaunchDetailsQueryVariables {
  id: string;
}
