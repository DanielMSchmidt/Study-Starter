// import * as ActionTypes from '../constants/actionTypes';
// import { createStore } from 'redux';
// import { expect } from 'chai';
// import rootReducer from '../reducers';
// import calculator from '../utils/fuelSavingsCalculator';
// import dateHelper from '../utils/dateHelper';
// import initialState from '../reducers/initialState';

describe('Store', () => {
  it('should display results when necessary data is provided', () => {
    // const store = createStore(rootReducer, initialState);

    // const actions = [
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
    //   { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' }
    // ];
    // actions.forEach(action => store.dispatch(action));

    // const actual = store.getState();
    // const expected = {
    //   newMpg: 20,
    //   tradeMpg: 10,
    //   newPpg: 1.50,
    //   tradePpg: 1.50,
    //   milesDriven: 100,
    //   milesDrivenTimeframe: 'month',
    //   displayResults: false,
    //   dateModified: dateHelper.getFormattedDateTime(new Date()),
    //   necessaryDataIsProvidedToCalculateSavings: true,
    //   savings: calculator().calculateSavings(store.getState().fuelSavings)
    // };

    // expect(actual.fuelSavings).to.deep.equal(expected);
  });
});
