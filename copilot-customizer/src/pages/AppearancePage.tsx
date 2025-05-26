import React from 'react';
import { useAppSelector, useAppDispatch } from '../features/store/store';
import { 
  updateAppearance, 
  addAccessory, 
  removeAccessory, 
  resetAppearance 
} from '../features/appearance/appearanceSlice';

const AppearancePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const appearance = useAppSelector(state => state.appearance);

  // 外观属性处理函数
  const handleAppearanceChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateAppearance({ [name]: name === 'age' ? Number(value) : value }));
  };

  // 添加配饰
  const handleAddAccessory = (accessory: string) => {
    dispatch(addAccessory(accessory));
  };

  // 移除配饰
  const handleRemoveAccessory = (accessory: string) => {
    dispatch(removeAccessory(accessory));
  };

  // 重置外观
  const handleReset = () => {
    dispatch(resetAppearance());
  };

  // 可用配饰列表
  const availableAccessories = [
    '眼镜', '耳环', '项链', '手表', '帽子', '围巾', '领带', '胸针'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">外貌定制</h1>
        <p className="text-gray-600 mt-2">定制您的智能体 Copilot 的外观特征</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
            <div className="bg-purple-600 text-white p-4">
              <h2 className="text-xl font-semibold">预览</h2>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">3D 模型预览</p>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="/preview"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  进入全屏预览
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-purple-600 text-white p-4">
              <h2 className="text-xl font-semibold">基本特征</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">性别</label>
                  <select 
                    name="gender" 
                    value={appearance.gender} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="中性">中性</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    年龄: {appearance.age}
                  </label>
                  <input 
                    type="range" 
                    name="age" 
                    min="18" 
                    max="80" 
                    value={appearance.age} 
                    onChange={handleAppearanceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>年轻</span>
                    <span>年长</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">种族</label>
                  <select 
                    name="ethnicity" 
                    value={appearance.ethnicity} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="多元">多元</option>
                    <option value="亚洲">亚洲</option>
                    <option value="欧洲">欧洲</option>
                    <option value="非洲">非洲</option>
                    <option value="拉丁美洲">拉丁美洲</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-purple-600 text-white p-4">
              <h2 className="text-xl font-semibold">面部特征</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">脸型</label>
                  <select 
                    name="faceShape" 
                    value={appearance.faceShape} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="椭圆形">椭圆形</option>
                    <option value="圆形">圆形</option>
                    <option value="方形">方形</option>
                    <option value="心形">心形</option>
                    <option value="菱形">菱形</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">眼睛形状</label>
                  <select 
                    name="eyeShape" 
                    value={appearance.eyeShape} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="标准">标准</option>
                    <option value="圆形">圆形</option>
                    <option value="杏仁形">杏仁形</option>
                    <option value="细长">细长</option>
                    <option value="下垂">下垂</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">眼睛颜色</label>
                  <select 
                    name="eyeColor" 
                    value={appearance.eyeColor} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="棕色">棕色</option>
                    <option value="蓝色">蓝色</option>
                    <option value="绿色">绿色</option>
                    <option value="灰色">灰色</option>
                    <option value="琥珀色">琥珀色</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">鼻子形状</label>
                  <select 
                    name="noseShape" 
                    value={appearance.noseShape} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="标准">标准</option>
                    <option value="直挺">直挺</option>
                    <option value="圆润">圆润</option>
                    <option value="宽扁">宽扁</option>
                    <option value="尖细">尖细</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">嘴巴形状</label>
                  <select 
                    name="mouthShape" 
                    value={appearance.mouthShape} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="标准">标准</option>
                    <option value="丰满">丰满</option>
                    <option value="薄唇">薄唇</option>
                    <option value="宽大">宽大</option>
                    <option value="心形">心形</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-purple-600 text-white p-4">
              <h2 className="text-xl font-semibold">发型与服装</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">发型</label>
                  <select 
                    name="hairStyle" 
                    value={appearance.hairStyle} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="短发">短发</option>
                    <option value="中长发">中长发</option>
                    <option value="长发">长发</option>
                    <option value="卷发">卷发</option>
                    <option value="直发">直发</option>
                    <option value="光头">光头</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">发色</label>
                  <select 
                    name="hairColor" 
                    value={appearance.hairColor} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="黑色">黑色</option>
                    <option value="棕色">棕色</option>
                    <option value="金色">金色</option>
                    <option value="红色">红色</option>
                    <option value="灰色">灰色</option>
                    <option value="白色">白色</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">服装风格</label>
                  <select 
                    name="clothingStyle" 
                    value={appearance.clothingStyle} 
                    onChange={handleAppearanceChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="休闲">休闲</option>
                    <option value="正式">正式</option>
                    <option value="商务">商务</option>
                    <option value="时尚">时尚</option>
                    <option value="运动">运动</option>
                    <option value="学院">学院</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-purple-600 text-white p-4">
              <h2 className="text-xl font-semibold">配饰</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">已选配饰</label>
                <div className="flex flex-wrap gap-2">
                  {appearance.accessories.length > 0 ? (
                    appearance.accessories.map((accessory) => (
                      <span 
                        key={accessory} 
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center"
                      >
                        {accessory}
                        <button 
                          onClick={() => handleRemoveAccessory(accessory)}
                          className="ml-2 text-purple-600 hover:text-purple-800"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">未选择配饰</span>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">添加配饰</label>
                <div className="flex flex-wrap gap-2">
                  {availableAccessories.map((accessory) => (
                    <button 
                      key={accessory}
                      onClick={() => handleAddAccessory(accessory)}
                      disabled={appearance.accessories.includes(accessory)}
                      className={`px-3 py-1 rounded-full ${
                        appearance.accessories.includes(accessory)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {accessory}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              重置外观
            </button>
            <a 
              href="/preview"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              下一步：在线预览
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearancePage;
