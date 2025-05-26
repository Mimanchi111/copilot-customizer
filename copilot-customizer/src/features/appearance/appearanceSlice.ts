import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 外观属性类型定义
export interface AppearanceAttributes {
  gender: string; // 性别：男、女、中性等
  age: number; // 年龄：0-100
  ethnicity: string; // 种族
  faceShape: string; // 脸型：圆形、方形、椭圆形等
  eyeShape: string; // 眼睛形状
  eyeColor: string; // 眼睛颜色
  noseShape: string; // 鼻子形状
  mouthShape: string; // 嘴巴形状
  hairStyle: string; // 发型
  hairColor: string; // 发色
  clothingStyle: string; // 服装风格
  accessories: string[]; // 配饰列表
}

// 初始状态
const initialState: AppearanceAttributes = {
  gender: '中性',
  age: 30,
  ethnicity: '多元',
  faceShape: '椭圆形',
  eyeShape: '标准',
  eyeColor: '棕色',
  noseShape: '标准',
  mouthShape: '标准',
  hairStyle: '短发',
  hairColor: '黑色',
  clothingStyle: '休闲',
  accessories: [],
};

// 创建slice
export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    // 更新单个外观属性
    updateAppearance: (state, action: PayloadAction<Partial<AppearanceAttributes>>) => {
      return { ...state, ...action.payload };
    },
    // 添加配饰
    addAccessory: (state, action: PayloadAction<string>) => {
      if (!state.accessories.includes(action.payload)) {
        state.accessories.push(action.payload);
      }
    },
    // 移除配饰
    removeAccessory: (state, action: PayloadAction<string>) => {
      state.accessories = state.accessories.filter(item => item !== action.payload);
    },
    // 重置外观
    resetAppearance: () => {
      return initialState;
    },
    // 应用预设外观
    applyAppearanceTemplate: (state, action: PayloadAction<AppearanceAttributes>) => {
      return { ...action.payload };
    },
  },
});

// 导出actions
export const {
  updateAppearance,
  addAccessory,
  removeAccessory,
  resetAppearance,
  applyAppearanceTemplate,
} = appearanceSlice.actions;

// 导出reducer
export default appearanceSlice.reducer;
