import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 预览状态类型定义
export interface PreviewState {
  isRotating: boolean; // 是否正在旋转
  zoom: number; // 缩放级别：0.5-2.0
  angle: number; // 查看角度：0-360
  animationState: string; // 动画状态：idle, talking, emoting, etc.
  currentEmotion: string; // 当前显示的情绪
  lightingPreset: string; // 光照预设：natural, studio, dramatic, etc.
  backgroundScene: string; // 背景场景：office, nature, abstract, etc.
}

// 初始状态
const initialState: PreviewState = {
  isRotating: false,
  zoom: 1.0,
  angle: 0,
  animationState: 'idle',
  currentEmotion: '平静',
  lightingPreset: 'natural',
  backgroundScene: 'neutral',
};

// 创建slice
export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    // 更新预览状态
    updatePreview: (state, action: PayloadAction<Partial<PreviewState>>) => {
      return { ...state, ...action.payload };
    },
    // 切换旋转状态
    toggleRotation: (state) => {
      state.isRotating = !state.isRotating;
    },
    // 设置缩放级别
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = Math.max(0.5, Math.min(2.0, action.payload));
    },
    // 设置查看角度
    setAngle: (state, action: PayloadAction<number>) => {
      state.angle = action.payload % 360;
    },
    // 设置动画状态
    setAnimationState: (state, action: PayloadAction<string>) => {
      state.animationState = action.payload;
    },
    // 设置当前情绪
    setCurrentEmotion: (state, action: PayloadAction<string>) => {
      state.currentEmotion = action.payload;
    },
    // 设置光照预设
    setLightingPreset: (state, action: PayloadAction<string>) => {
      state.lightingPreset = action.payload;
    },
    // 设置背景场景
    setBackgroundScene: (state, action: PayloadAction<string>) => {
      state.backgroundScene = action.payload;
    },
    // 重置预览状态
    resetPreview: () => {
      return initialState;
    },
  },
});

// 导出actions
export const {
  updatePreview,
  toggleRotation,
  setZoom,
  setAngle,
  setAnimationState,
  setCurrentEmotion,
  setLightingPreset,
  setBackgroundScene,
  resetPreview,
} = previewSlice.actions;

// 导出reducer
export default previewSlice.reducer;
