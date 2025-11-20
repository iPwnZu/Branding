import React, { useState } from 'react';
import { searchTechTrends, askArchitect, generateCreativeImage, generateSpeech, findPlaces } from '../services/geminiService';
import { LoadState, AspectRatio } from '../types';

export const GeminiDemo: React.FC = () => {
  type TabType = 'trends' | 'architect' | 'studio' | 'voice' | 'maps';
  const [activeTab, setActiveTab] = useState<TabType>('trends');
  
  // Search State
  const [trendQuery, setTrendQuery] = useState('Web Architecture');
  const [trends, setTrends] = useState<{text: string, sources: any[] | null} | null>(null);
  const [trendStatus, setTrendStatus] = useState(LoadState.IDLE);

  // Thinking State
  const [archQuestion, setArchQuestion] = useState('');
  const [archAnswer, setArchAnswer] = useState('');
  const [archStatus, setArchStatus] = useState(LoadState.IDLE);

  // Image Gen State
  const [imgPrompt, setImgPrompt] = useState('A futuristic digital bridge connecting nature and technology, cyberpunk style');
  const [imgRatio, setImgRatio] = useState<AspectRatio>('16:9');
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [imgStatus, setImgStatus] = useState(LoadState.IDLE);

  // TTS State
  const [ttsText, setTtsText] = useState('Welcome to the future of digital architecture. TopBot systems online.');
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [ttsStatus, setTtsStatus] = useState(LoadState.IDLE);

  // Maps State
  const [mapQuery, setMapQuery] = useState('Coffee shops in Brno');
  const [mapResult, setMapResult] = useState<{text: string, places: any[]} | null>(null);
  const [mapStatus, setMapStatus] = useState(LoadState.IDLE);

  const handleSearch = async () => {
    if (!trendQuery) return;
    setTrendStatus(LoadState.LOADING);
    try {
      const result = await searchTechTrends(trendQuery);
      setTrends({ text: result.text, sources: result.sources });
      setTrendStatus(LoadState.SUCCESS);
    } catch (e) {
      setTrendStatus(LoadState.ERROR);
    }
  };

  const handleThinking = async () => {
    if (!archQuestion) return;
    setArchStatus(LoadState.LOADING);
    try {
      const text = await askArchitect(archQuestion);
      if (text) setArchAnswer(text);
      setArchStatus(LoadState.SUCCESS);
    } catch (e) {
      setArchStatus(LoadState.ERROR);
    }
  };

  const handleImageGen = async () => {
      if (!imgPrompt) return;
      setImgStatus(LoadState.LOADING);
      try {
          const url = await generateCreativeImage(imgPrompt, imgRatio);
          setGeneratedImg(url);
          setImgStatus(LoadState.SUCCESS);
      } catch (e) {
          setImgStatus(LoadState.ERROR);
      }
  };

  const handleTTS = async () => {
      if (!ttsText) return;
      setTtsStatus(LoadState.LOADING);
      try {
          const audioData = await generateSpeech(ttsText);
          setAudioSrc(audioData);
          setTtsStatus(LoadState.SUCCESS);
      } catch (e) {
          setTtsStatus(LoadState.ERROR);
      }
  };

  const handleMapSearch = async () => {
      if (!mapQuery) return;
      setMapStatus(LoadState.LOADING);
      try {
          const result = await findPlaces(mapQuery);
          setMapResult(result);
          setMapStatus(LoadState.SUCCESS);
      } catch (e) {
          setMapStatus(LoadState.ERROR);
      }
  }

  const tabs: {id: TabType, label: string, icon: string}[] = [
      { id: 'trends', label: 'TRENDS', icon: '🔍' },
      { id: 'architect', label: 'ARCHITECT', icon: '🧠' },
      { id: 'studio', label: 'STUDIO', icon: '🎨' },
      { id: 'voice', label: 'VOICE', icon: '🎙️' },
      { id: 'maps', label: 'MAPS', icon: '📍' },
  ];

  const ratios: AspectRatio[] = ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'];

  return (
    <section id="innovation" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
           <div className="flex justify-center mb-6">
              <img 
                src="https://ik.imagekit.io/ipwnzu/IMG_0079(1).PNG?updatedAt=1763676203724" 
                alt="Think Different" 
                className="w-24 h-24 rounded-full border-4 border-slate-800 shadow-xl object-cover"
              />
           </div>
           <h2 className="text-4xl font-bold text-white mb-4">TopBot Intelligence</h2>
           <p className="text-slate-400">Powered by Gemini 3 Pro & 2.5 Flash Models</p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
           {/* Navigation Tabs */}
           <div className="flex border-b border-slate-800 overflow-x-auto scrollbar-hide">
              {tabs.map(tab => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-4 min-w-[120px] text-center font-mono text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-slate-800 text-brand-accent border-b-2 border-brand-accent' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                     <span className="mr-2">{tab.icon}</span> {tab.label}
                  </button>
              ))}
           </div>

           <div className="p-4 md:p-8 min-h-[400px]">
              
              {/* --- TRENDS TAB (Search Grounding) --- */}
              {activeTab === 'trends' && (
                <div className="space-y-6 animate-fade-in">
                   <h3 className="text-white font-bold text-lg">Google Search Grounding</h3>
                   <div className="flex gap-4 flex-col sm:flex-row">
                      <input 
                        type="text" 
                        value={trendQuery}
                        onChange={(e) => setTrendQuery(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none"
                        placeholder="Enter a topic..."
                      />
                      <button 
                        onClick={handleSearch}
                        disabled={trendStatus === LoadState.LOADING}
                        className="bg-brand-accent text-brand-dark font-bold px-6 py-3 rounded-lg hover:bg-brand-accent/80 disabled:opacity-50"
                      >
                        {trendStatus === LoadState.LOADING ? 'Searching...' : 'Scan Trends'}
                      </button>
                   </div>

                   {trendStatus === LoadState.SUCCESS && trends && (
                      <div className="mt-6">
                         <div className="prose prose-invert max-w-none mb-6 bg-slate-950 p-4 rounded border border-slate-800">
                            <p className="whitespace-pre-line text-slate-300">{trends.text}</p>
                         </div>
                         {trends.sources && trends.sources.length > 0 && (
                            <div className="border-t border-slate-800 pt-4">
                               <h4 className="text-xs uppercase text-slate-500 font-bold mb-2">Verified Sources:</h4>
                               <div className="flex flex-wrap gap-2">
                                  {trends.sources.map((src, idx) => (
                                     <a key={idx} href={src.uri} target="_blank" rel="noreferrer" className="text-xs bg-slate-800 text-brand-accent px-2 py-1 rounded hover:bg-slate-700 truncate max-w-[200px] flex items-center gap-1">
                                        <span>🔗</span> {src.title || "Source Link"}
                                     </a>
                                  ))}
                               </div>
                            </div>
                         )}
                      </div>
                   )}
                </div>
              )}

              {/* --- ARCHITECT TAB (Thinking) --- */}
              {activeTab === 'architect' && (
                 <div className="space-y-6 animate-fade-in">
                    <h3 className="text-white font-bold text-lg">Gemini 3 Pro Reasoning</h3>
                    <p className="text-sm text-slate-400 italic">
                       Complex architectural reasoning with extended thinking budget.
                    </p>
                    <textarea 
                      value={archQuestion}
                      onChange={(e) => setArchQuestion(e.target.value)}
                      className="w-full h-32 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
                      placeholder="Example: Compare Serverless vs Kubernetes for high-frequency trading..."
                    />
                    <div className="flex justify-end">
                       <button 
                          onClick={handleThinking}
                          disabled={archStatus === LoadState.LOADING}
                          className="bg-brand-secondary text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-secondary/80 disabled:opacity-50 flex items-center gap-2"
                       >
                          {archStatus === LoadState.LOADING ? 'Thinking...' : 'Consult Architect'}
                       </button>
                    </div>

                    {archStatus === LoadState.SUCCESS && archAnswer && (
                       <div className="bg-slate-950 p-6 rounded-lg border border-slate-800">
                          <h4 className="text-brand-secondary font-mono text-sm mb-4">Analysis Result:</h4>
                          <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                             {archAnswer.split('\n').map((line, i) => (
                                <p key={i} className="mb-2">{line}</p>
                             ))}
                          </div>
                       </div>
                    )}
                 </div>
              )}

              {/* --- STUDIO TAB (Image Gen) --- */}
              {activeTab === 'studio' && (
                  <div className="space-y-6 animate-fade-in">
                      <h3 className="text-white font-bold text-lg">Creative Studio (Gemini 3 Pro Image)</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                          <div className="md:col-span-2 space-y-4">
                              <textarea 
                                  value={imgPrompt}
                                  onChange={(e) => setImgPrompt(e.target.value)}
                                  className="w-full h-24 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                                  placeholder="Describe the image you want to generate..."
                              />
                              <div className="flex flex-wrap gap-2 items-center">
                                  <span className="text-slate-400 text-sm mr-2">Aspect Ratio:</span>
                                  {ratios.map(r => (
                                      <button 
                                          key={r} 
                                          onClick={() => setImgRatio(r)}
                                          className={`px-3 py-1 rounded text-xs font-mono border ${imgRatio === r ? 'bg-purple-600 border-purple-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                      >
                                          {r}
                                      </button>
                                  ))}
                              </div>
                              <button 
                                  onClick={handleImageGen}
                                  disabled={imgStatus === LoadState.LOADING}
                                  className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-500 disabled:opacity-50 w-full md:w-auto"
                              >
                                  {imgStatus === LoadState.LOADING ? 'Generating Art...' : 'Generate Image'}
                              </button>
                          </div>
                          <div className="md:col-span-1">
                              <div className="aspect-square bg-slate-950 border-2 border-dashed border-slate-800 rounded-lg flex items-center justify-center overflow-hidden relative">
                                  {imgStatus === LoadState.LOADING && (
                                      <div className="animate-pulse text-purple-500">Creating...</div>
                                  )}
                                  {imgStatus === LoadState.SUCCESS && generatedImg ? (
                                      <img src={generatedImg} alt="Generated" className="w-full h-full object-contain" />
                                  ) : (
                                      !generatedImg && imgStatus !== LoadState.LOADING && <span className="text-slate-600 text-sm">Preview Area</span>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
              )}

              {/* --- VOICE TAB (TTS) --- */}
              {activeTab === 'voice' && (
                  <div className="space-y-6 animate-fade-in">
                      <h3 className="text-white font-bold text-lg">Voice Synthesis (Gemini 2.5 TTS)</h3>
                      <div className="space-y-4">
                          <textarea 
                                value={ttsText}
                                onChange={(e) => setTtsText(e.target.value)}
                                className="w-full h-24 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                                placeholder="Enter text to speak..."
                          />
                          <button 
                                onClick={handleTTS}
                                disabled={ttsStatus === LoadState.LOADING}
                                className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-500 disabled:opacity-50 flex items-center gap-2"
                          >
                                <span>🔊</span>
                                {ttsStatus === LoadState.LOADING ? 'Synthesizing...' : 'Generate Speech'}
                          </button>

                          {audioSrc && (
                              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mt-4">
                                  <audio controls src={audioSrc} className="w-full" autoPlay />
                              </div>
                          )}
                      </div>
                  </div>
              )}

              {/* --- MAPS TAB (Grounding) --- */}
              {activeTab === 'maps' && (
                  <div className="space-y-6 animate-fade-in">
                      <h3 className="text-white font-bold text-lg">Location Intelligence</h3>
                      <div className="flex gap-4 flex-col sm:flex-row">
                          <input 
                              type="text" 
                              value={mapQuery}
                              onChange={(e) => setMapQuery(e.target.value)}
                              className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                              placeholder="Search for places (e.g. Coworking in Brno)..."
                          />
                          <button 
                              onClick={handleMapSearch}
                              disabled={mapStatus === LoadState.LOADING}
                              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-500 disabled:opacity-50"
                          >
                              {mapStatus === LoadState.LOADING ? 'Locating...' : 'Find Places'}
                          </button>
                      </div>

                      {mapStatus === LoadState.SUCCESS && mapResult && (
                          <div className="mt-6 grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-950 p-4 rounded border border-slate-800 text-slate-300 text-sm whitespace-pre-line">
                                  {mapResult.text}
                              </div>
                              <div className="space-y-2">
                                  <h4 className="text-xs uppercase text-slate-500 font-bold">Found Locations:</h4>
                                  {mapResult.places.map((place, i) => (
                                      <a 
                                          key={i} 
                                          href={place.uri} 
                                          target="_blank" 
                                          rel="noreferrer"
                                          className="block bg-slate-800 hover:bg-slate-700 p-3 rounded flex items-center justify-between group transition-colors"
                                      >
                                          <span className="text-white font-medium">{place.title || "Unknown Place"}</span>
                                          <span className="text-blue-400 group-hover:translate-x-1 transition-transform">🗺️</span>
                                      </a>
                                  ))}
                                  {mapResult.places.length === 0 && (
                                      <p className="text-slate-600 italic">No direct map links returned.</p>
                                  )}
                              </div>
                          </div>
                      )}
                  </div>
              )}

           </div>
        </div>
      </div>
    </section>
  );
};
