import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// 导入各个模块的reducer
import attributesReducer from '../attributes/attributesSlice';
import appearanceReducer from '../appearance/appearanceSlice';
import previewReducer from '../preview/previewSlice';

export const store = configureStore({
  reducer: {
    attributes: attributesReducer,
    appearance: appearanceReducer,
    preview: previewReducer,
  },
});

// 为dispatch和selector定义类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 自定义hooks以便在组件中使用
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
