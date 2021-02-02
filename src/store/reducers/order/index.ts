import {
  DispatchType,
  SET_DEFAULT_ADRESS,
  CHANGE_DEFAULT_ADRESS,
} from '../../actions/menuAction';

export interface IAdress {
  id: number;
  name: string;
  lat?: number;
  lon?: number;
}

interface IOrederStore {
  adresses: IAdress[];
  selectedAdress: IAdress | {};
}

const initialState: IOrederStore = {
  adresses: [
    {
      id: 0,
      name: 'Pushkin street, 40',
      lat: 43.257997,
      lon: 76.911818,
    },
    {
      id: 1,
      name: 'Pushkin street, 41',
      lat: 43.249043,
      lon: 76.942597,
    },
    {
      id: 2,
      name: 'Pushkin street, 42',
      lat: 43.242973,
      lon: 76.927478,
    },
  ],

  selectedAdress: {},
};

export const orderReducer = (
  state: IOrederStore = initialState,
  action: any,
): any => {
  switch (action.type) {
    case SET_DEFAULT_ADRESS:
      return {
        ...state,
        selectedAdress: state.adresses[0],
      };

    case CHANGE_DEFAULT_ADRESS:
      return {
        ...state,
        selectedAdress: action.payload,
      };

    default:
      return state;
  }
};
