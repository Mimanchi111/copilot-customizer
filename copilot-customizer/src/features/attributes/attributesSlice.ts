import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 情感属性类型定义
export interface EmotionAttributes {
  type: string; // 情绪类型：喜、怒、哀、乐等
  intensity: number; // 情绪强度：0-100
  triggerThreshold: number; // 触发阈值：0-100
  expressionStyle: string; // 表达方式：直接表达、含蓄表达等
}

// 行为认知属性类型定义
export interface CognitiveAttributes {
  personalityType: string; // 个性类型：内向、外向等
  behaviorStyle: string; // 行为风格：正式、随意、幽默、严肃等
  decisionPreference: string; // 决策偏好：理性、感性等
  learningAbility: number; // 学习能力：0-100
}

// 社交道德属性类型定义
export interface SocialMoralAttributes {
  valueOrientation: string; // 价值观倾向：保守、开放、传统、现代等
  moralFramework: string; // 道德判断框架：功利主义、义务论等
  culturalBackground: string; // 文化背景：东方、西方等
  socialEtiquette: string; // 社交礼仪：正式、非正式等
  privacyBoundary: number; // 隐私边界意识：0-100
}

// 属性状态类型定义
export interface AttributesState {
  emotion: EmotionAttributes;
  cognitive: CognitiveAttributes;
  socialMoral: SocialMoralAttributes;
}

// 初始状态
const initialState: AttributesState = {
  emotion: {
    type: '平静',
    intensity: 50,
    triggerThreshold: 50,
    expressionStyle: '平衡表达',
  },
  cognitive: {
    personalityType: '平衡型',
    behaviorStyle: '适中',
    decisionPreference: '平衡',
    learningAbility: 50,
  },
  socialMoral: {
    valueOrientation: '中立',
    moralFramework: '平衡',
    culturalBackground: '多元',
    socialEtiquette: '通用',
    privacyBoundary: 50,
  },
};

// 创建slice
export const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    // 更新情感属性
    updateEmotion: (state, action: PayloadAction<Partial<EmotionAttributes>>) => {
      state.emotion = { ...state.emotion, ...action.payload };
    },
    // 更新行为认知属性
    updateCognitive: (state, action: PayloadAction<Partial<CognitiveAttributes>>) => {
      state.cognitive = { ...state.cognitive, ...action.payload };
    },
    // 更新社交道德属性
    updateSocialMoral: (state, action: PayloadAction<Partial<SocialMoralAttributes>>) => {
      state.socialMoral = { ...state.socialMoral, ...action.payload };
    },
    // 重置所有属性
    resetAttributes: (state) => {
      state.emotion = initialState.emotion;
      state.cognitive = initialState.cognitive;
      state.socialMoral = initialState.socialMoral;
    },
    // 应用预设模板
    applyTemplate: (state, action: PayloadAction<AttributesState>) => {
      return { ...action.payload };
    },
  },
});

// 导出actions
export const {
  updateEmotion,
  updateCognitive,
  updateSocialMoral,
  resetAttributes,
  applyTemplate,
} = attributesSlice.actions;

// 导出reducer
export default attributesSlice.reducer;
