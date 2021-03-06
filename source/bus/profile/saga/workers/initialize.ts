// Core
import { put } from 'redux-saga/effects';

// Actions
import { togglerCreatorAction } from '../../../togglers';
import { authenticateAsync } from '../../actions';
import { productsFetchAsync } from '../../../products/actions';

export function* callInitializeWorker () {
    yield put(authenticateAsync());
    yield put(productsFetchAsync());

    yield put(togglerCreatorAction('isInitialized', true));
}
