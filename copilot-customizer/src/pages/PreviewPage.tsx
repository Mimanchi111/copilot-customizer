import React, { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../features/store/store';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { 
  toggleRotation, 
  setZoom, 
  setAnimationState, 
  setCurrentEmotion,
  setLightingPreset,
  setBackgroundScene
} from '../features/preview/previewSlice';

// 简单的3D模型组件
const AvatarModel: React.FC<{ emotion: string }> = ({ emotion }) => {
  // 这里应该加载实际的3D模型，这里用简单的几何体代替
  return (
    <group>
      {/* 头部 */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f9c9b6" />
      </mesh>
      
      {/* 眼睛 */}
      <mesh position={[-0.3, 0.1, 0.85]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.3, 0.1, 0.85]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* 嘴巴 - 根据情绪变化 */}
      {emotion === '喜悦' && (
        <mesh position={[0, -0.3, 0.85]} rotation={[0, 0, Math.PI * 0.1]}>
          <torusGeometry args={[0.3, 0.05, 16, 100, Math.PI]} />
          <meshStandardMaterial color="#d63031" />
        </mesh>
      )}
      {emotion === '平静' && (
        <mesh position={[0, -0.3, 0.85]}>
          <boxGeometry args={[0.5, 0.05, 0.05]} />
          <meshStandardMaterial color="#d63031" />
        </mesh>
      )}
      {emotion === '严肃' && (
        <mesh position={[0, -0.3, 0.85]} rotation={[0, 0, Math.PI * -0.1]}>
          <torusGeometry args={[0.3, 0.05, 16, 100, Math.PI]} />
          <meshStandardMaterial color="#d63031" />
        </mesh>
      )}
    </group>
  );
};

// 对话模拟组件
const DialogSimulation: React.FC = () => {
  const attributes = useAppSelector(state => state.attributes);
  const [input, setInput] = React.useState('');
  const [conversation, setConversation] = React.useState<{role: string, content: string}[]>([
    {role: 'system', content: '欢迎使用智能体对话模拟。请输入内容与您定制的Copilot进行交互。'}
  ]);
  const dispatch = useAppDispatch();

  // 模拟对话响应
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // 添加用户消息
    setConversation(prev => [...prev, {role: 'user', content: input}]);
    
    // 根据属性生成响应
    setTimeout(() => {
      let response = '';
      
      // 根据情感属性调整回复风格
      if (attributes.emotion.type === '喜悦') {
        response = `😊 ${generatePositiveResponse(input, attributes)}`;
        dispatch(setCurrentEmotion('喜悦'));
      } else if (attributes.emotion.type === '严肃') {
        response = `🧐 ${generateSeriousResponse(input, attributes)}`;
        dispatch(setCurrentEmotion('严肃'));
      } else {
        response = `${generateNeutralResponse(input, attributes)}`;
        dispatch(setCurrentEmotion('平静'));
      }
      
      setConversation(prev => [...prev, {role: 'assistant', content: response}]);
      dispatch(setAnimationState('talking'));
      
      // 动画结束后恢复idle状态
      setTimeout(() => {
        dispatch(setAnimationState('idle'));
      }, 2000);
    }, 500);
    
    setInput('');
  };

  // 生成积极回复
  const generatePositiveResponse = (input: string, attributes: any) => {
    const responses = [
      `当然可以！我很高兴能帮助您解决这个问题！`,
      `这是个很棒的想法！我们一起来实现它吧！`,
      `太好了！我正好对这个话题很感兴趣！`,
      `我很乐意为您提供帮助！让我们开始吧！`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // 生成严肃回复
  const generateSeriousResponse = (input: string, attributes: any) => {
    const responses = [
      `我理解您的需求。让我认真分析一下这个问题。`,
      `这是一个需要谨慎对待的问题。我会给您一个专业的回答。`,
      `我会以客观的角度来分析这个情况。`,
      `这个问题值得深入思考。让我为您提供一个全面的分析。`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // 生成中性回复
  const generateNeutralResponse = (input: string, attributes: any) => {
    const responses = [
      `我明白您的意思。这是我的看法...`,
      `感谢您的提问。我可以这样回答...`,
      `我已经理解了您的需求。以下是我的回应...`,
      `这是一个有趣的问题。我的回答是...`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">对话模拟</h2>
      </div>
      <div className="p-4">
        <div className="bg-gray-100 rounded-lg p-4 h-64 overflow-y-auto mb-4">
          {conversation.map((msg, index) => (
            <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block rounded-lg px-4 py-2 max-w-3/4 ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : msg.role === 'system' 
                    ? 'bg-gray-300 text-gray-700' 
                    : 'bg-purple-600 text-white'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="输入消息与智能体交互..."
            className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r transition-colors"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
};

const PreviewPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const preview = useAppSelector(state => state.preview);
  const attributes = useAppSelector(state => state.attributes);
  const appearance = useAppSelector(state => state.appearance);

  // 处理旋转切换
  const handleToggleRotation = () => {
    dispatch(toggleRotation());
  };

  // 处理缩放调整
  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setZoom(Number(e.target.value)));
  };

  // 处理光照预设切换
  const handleLightingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLightingPreset(e.target.value));
  };

  // 处理背景场景切换
  const handleBackgroundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBackgroundScene(e.target.value));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">智能体在线预览</h1>
        <p className="text-gray-600 mt-2">实时体验您定制的智能体 Copilot</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-green-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">3D 预览</h2>
              <div className="flex items-center">
                <button
                  onClick={handleToggleRotation}
                  className={`px-3 py-1 rounded ${
                    preview.isRotating 
                      ? 'bg-green-800' 
                      : 'bg-green-700 hover:bg-green-800'
                  } text-white transition-colors mr-2`}
                >
                  {preview.isRotating ? '停止旋转' : '开始旋转'}
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg h-96">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <PresentationControls
                    global
                    zoom={preview.zoom}
                    rotation={[0, preview.isRotating ? Math.PI * 2 : 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                  >
                    <AvatarModel emotion={preview.currentEmotion} />
                  </PresentationControls>
                  <Environment preset="city" />
                </Canvas>
              </div>
            </div>
          </div>

          <DialogSimulation />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-green-600 text-white p-4">
              <h2 className="text-xl font-semibold">预览控制</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  缩放: {preview.zoom.toFixed(1)}
                </label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.0" 
                  step="0.1"
                  value={preview.zoom} 
                  onChange={handleZoomChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">光照预设</label>
                <select 
                  value={preview.lightingPreset} 
                  onChange={handleLightingChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="natural">自然光</option>
                  <option value="studio">工作室</option>
                  <option value="dramatic">戏剧性</option>
                  <option value="soft">柔和</option>
                  <option value="night">夜晚</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">背景场景</label>
                <select 
                  value={preview.backgroundScene} 
                  onChange={handleBackgroundChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="neutral">中性</option>
                  <option value="office">办公室</option>
                  <option value="nature">自然</option>
                  <option value="abstract">抽象</option>
                  <option value="tech">科技</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-green-600 text-white p-4">
              <h2 className="text-xl font-semibold">当前配置摘要</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">情感属性</h3>
                <p className="text-gray-600">类型: {attributes.emotion.type}</p>
                <p className="text-gray-600">强度: {attributes.emotion.intensity}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">行为认知</h3>
                <p className="text-gray-600">个性: {attributes.cognitive.personalityType}</p>
                <p className="text-gray-600">风格: {attributes.cognitive.behaviorStyle}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">外观</h3>
                <p className="text-gray-600">性别: {appearance.gender}</p>
                <p className="text-gray-600">年龄: {appearance.age}</p>
                <p className="text-gray-600">发型: {appearance.hairStyle}</p>
              </div>
              
              <div className="text-center mt-6">
                <a 
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                  返回首页
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
