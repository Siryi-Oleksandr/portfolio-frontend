import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
