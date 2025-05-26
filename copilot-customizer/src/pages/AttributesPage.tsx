import React from 'react';
import { useAppSelector, useAppDispatch } from '../features/store/store';
import { 
  updateEmotion, 
  updateCognitive, 
  updateSocialMoral, 
  resetAttributes 
} from '../features/attributes/attributesSlice';

const AttributesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector(state => state.attributes);

  // 情感属性处理函数
  const handleEmotionChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateEmotion({ [name]: name === 'intensity' || name === 'triggerThreshold' ? Number(value) : value }));
  };

  // 认知行为属性处理函数
  const handleCognitiveChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateCognitive({ [name]: name === 'learningAbility' ? Number(value) : value }));
  };

  // 社交道德属性处理函数
  const handleSocialMoralChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateSocialMoral({ [name]: name === 'privacyBoundary' ? Number(value) : value }));
  };

  // 重置所有属性
  const handleReset = () => {
    dispatch(resetAttributes());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">智能体属性配置</h1>
        <p className="text-gray-600 mt-2">定制您的智能体 Copilot 的情感、行为认知和社交道德观念</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* 情感属性配置 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-semibold">情感属性</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">情绪类型</label>
                <select 
                  name="type" 
                  value={attributes.emotion.type} 
                  onChange={handleEmotionChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="平静">平静</option>
                  <option value="喜悦">喜悦</option>
                  <option value="热情">热情</option>
                  <option value="严肃">严肃</option>
                  <option value="同情">同情</option>
                  <option value="好奇">好奇</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">表达方式</label>
                <select 
                  name="expressionStyle" 
                  value={attributes.emotion.expressionStyle} 
                  onChange={handleEmotionChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="平衡表达">平衡表达</option>
                  <option value="直接表达">直接表达</option>
                  <option value="含蓄表达">含蓄表达</option>
                  <option value="幽默表达">幽默表达</option>
                  <option value="正式表达">正式表达</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  情绪强度: {attributes.emotion.intensity}
                </label>
                <input 
                  type="range" 
                  name="intensity" 
                  min="0" 
                  max="100" 
                  value={attributes.emotion.intensity} 
                  onChange={handleEmotionChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>低</span>
                  <span>高</span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  触发阈值: {attributes.emotion.triggerThreshold}
                </label>
                <input 
                  type="range" 
                  name="triggerThreshold" 
                  min="0" 
                  max="100" 
                  value={attributes.emotion.triggerThreshold} 
                  onChange={handleEmotionChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>敏感</span>
                  <span>迟钝</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 行为认知属性配置 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-purple-600 text-white p-4">
            <h2 className="text-xl font-semibold">行为认知属性</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">个性类型</label>
                <select 
                  name="personalityType" 
                  value={attributes.cognitive.personalityType} 
                  onChange={handleCognitiveChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="平衡型">平衡型</option>
                  <option value="内向型">内向型</option>
                  <option value="外向型">外向型</option>
                  <option value="分析型">分析型</option>
                  <option value="创意型">创意型</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">行为风格</label>
                <select 
                  name="behaviorStyle" 
                  value={attributes.cognitive.behaviorStyle} 
                  onChange={handleCognitiveChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="适中">适中</option>
                  <option value="正式">正式</option>
                  <option value="随意">随意</option>
                  <option value="幽默">幽默</option>
                  <option value="严肃">严肃</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">决策偏好</label>
                <select 
                  name="decisionPreference" 
                  value={attributes.cognitive.decisionPreference} 
                  onChange={handleCognitiveChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="平衡">平衡</option>
                  <option value="理性">理性</option>
                  <option value="感性">感性</option>
                  <option value="谨慎">谨慎</option>
                  <option value="冒险">冒险</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  学习能力: {attributes.cognitive.learningAbility}
                </label>
                <input 
                  type="range" 
                  name="learningAbility" 
                  min="0" 
                  max="100" 
                  value={attributes.cognitive.learningAbility} 
                  onChange={handleCognitiveChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>保守</span>
                  <span>激进</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 社交道德属性配置 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white p-4">
            <h2 className="text-xl font-semibold">社交道德属性</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">价值观倾向</label>
                <select 
                  name="valueOrientation" 
                  value={attributes.socialMoral.valueOrientation} 
                  onChange={handleSocialMoralChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="中立">中立</option>
                  <option value="保守">保守</option>
                  <option value="开放">开放</option>
                  <option value="传统">传统</option>
                  <option value="现代">现代</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">道德判断框架</label>
                <select 
                  name="moralFramework" 
                  value={attributes.socialMoral.moralFramework} 
                  onChange={handleSocialMoralChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="平衡">平衡</option>
                  <option value="功利主义">功利主义</option>
                  <option value="义务论">义务论</option>
                  <option value="美德伦理">美德伦理</option>
                  <option value="关怀伦理">关怀伦理</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">文化背景</label>
                <select 
                  name="culturalBackground" 
                  value={attributes.socialMoral.culturalBackground} 
                  onChange={handleSocialMoralChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="多元">多元</option>
                  <option value="东方">东方</option>
                  <option value="西方">西方</option>
                  <option value="全球化">全球化</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">社交礼仪</label>
                <select 
                  name="socialEtiquette" 
                  value={attributes.socialMoral.socialEtiquette} 
                  onChange={handleSocialMoralChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="通用">通用</option>
                  <option value="正式">正式</option>
                  <option value="非正式">非正式</option>
                  <option value="商务">商务</option>
                  <option value="学术">学术</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  隐私边界意识: {attributes.socialMoral.privacyBoundary}
                </label>
                <input 
                  type="range" 
                  name="privacyBoundary" 
                  min="0" 
                  max="100" 
                  value={attributes.socialMoral.privacyBoundary} 
                  onChange={handleSocialMoralChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>开放</span>
                  <span>谨慎</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-between">
          <button 
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition-colors"
          >
            重置属性
          </button>
          <a 
            href="/appearance"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
          >
            下一步：外貌定制
          </a>
        </div>
      </div>
    </div>
  );
};

export default AttributesPage;
