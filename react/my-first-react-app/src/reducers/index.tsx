import { EnthusiasmAction } from '../actions';

import { IStoreState } from '../types/index';

import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';


export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}