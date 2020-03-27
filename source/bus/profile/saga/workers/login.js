// Core
import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Actions
import { togglerCreatorAction } from '../../../togglers';
import { authActions } from '../../actions';
import { orderActions } from '../../../orders/actions';

// Api
import { login } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callLoginWorker ({ payload: { email, password }}) {
    const result = yield makeRequest({
        fetcher:     login(email, password),
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
        yield put(orderActions.ordersFetchAsync());
        toast.success('Success Login!');
    }
}
