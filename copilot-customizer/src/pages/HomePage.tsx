import React from 'react';
import { useAppSelector } from '../features/store/store';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">智能体 Copilot 定制平台</h1>
        <p className="text-xl text-gray-600">打造属于您的个性化智能助手</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-semibold">个性化属性配置</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">为您的智能体 Copilot 定制情感、行为认知和社交道德观念等属性，打造独特的个性特征。</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>情绪表达与强度调节</li>
              <li>个性特质与行为风格</li>
              <li>价值观与道德判断框架</li>
            </ul>
            <a href="/attributes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              开始配置
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-600 text-white p-4">
            <h2 className="text-xl font-semibold">外貌定制</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">自由定制您的智能体 Copilot 的外观，包括面部特征、发型、服装风格等多种选项。</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>面部特征与表情定制</li>
              <li>发型与发色选择</li>
              <li>服装风格与配饰</li>
            </ul>
            <a href="/appearance" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              开始定制
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="bg-green-600 text-white p-4">
          <h2 className="text-xl font-semibold">实时在线预览</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">实时预览您定制的智能体 Copilot，体验不同属性和外貌设置下的交互效果。</p>
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-md h-64 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">3D 预览区域</p>
            </div>
          </div>
          <div className="text-center">
            <a href="/preview" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              进入预览
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">为什么选择我们的平台？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">高度个性化</h3>
            <p className="text-gray-600">丰富的属性配置选项，打造真正符合您需求的智能助手。</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">直观的界面</h3>
            <p className="text-gray-600">简洁易用的操作界面，无需专业知识即可完成定制。</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">实时预览</h3>
            <p className="text-gray-600">所见即所得的预览功能，立即体验定制效果。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
