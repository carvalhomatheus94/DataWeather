import { DataProps, PositionProps } from "./props";

export const Types = {
  GET_USER_LOCATION: 'APP/GET_USER_LOCATION',
  GET_FIND_INFO_POSITION: 'APP/GET_FIND_INFO_POSITION'
}

export interface InitialState {
  data: DataProps | null;
  latitude: number;
  longitude: number,
  loading: boolean,
}

export const initialState: InitialState = {
  data: null,
  latitude: 0,
  longitude: 0,
  loading: false,
};

export type State = InitialState;

export const getPositionUser = ({latitude, longitude}: PositionProps) => ({
  type: Types.GET_USER_LOCATION,
  latitude,
  longitude,
});

export const getFindInfoPosition = (data: DataProps) => ({
  type: Types.GET_FIND_INFO_POSITION,
  data,
});

export const geolocationReducer = (state = initialState, {latitude, longitude, type, data} : {latitude?: number; longitude?: number; data?: DataProps; type: any}) => {
  if (type === Types.GET_USER_LOCATION) {
    return {
      ...state,
      latitude,
      longitude,
      loading: true,
    };
  }
  if (type === Types.GET_FIND_INFO_POSITION) {
    return {
      ...state,
      data: data,
      loading: false
    };
  }
}
