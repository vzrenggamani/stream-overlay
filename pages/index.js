import { STREAM_CONFIG } from "../data/stream_config";

export default function streamcover() {
  return (
    <div className="bg-white h-screen">
      <div className="container mx-auto pt-52 flex flex-row items-start gap-80">
        <div id="stream-description" className="flex flex-col gap-32">
          <div id="page-title" className="flex flex-col gap-8 mb-24">
            <p className="text-5xl text-gray-500 font-mono mb-8">
              vzrenggamani/{STREAM_CONFIG.streamtype}
            </p>
            <h1 className="font-bold text-8xl text-gray-800 max-w-prose h-80">
              {STREAM_CONFIG.title}
            </h1>
          </div>
          <div id="video-presenter" className="flex flex-row gap-8">
            <p className="text-4xl font-bold text-gray-700">
              {STREAM_CONFIG.presenter} - <span className="text-4xl text-gray-600 font-normal">{STREAM_CONFIG.date}</span>
            </p>
          </div>
        </div>
        <img src="/logo-blue.svg" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex">
        <div className="bg-blue-600 h-12 flex-1"></div>
        <div className="bg-yellow-400 h-12 flex-1"></div>
        <div className="bg-red-500 h-12 flex-1"></div>
      </div>
    </div>
  );
}
