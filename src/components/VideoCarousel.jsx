import React, { useEffect, useState } from "react";
import { hightlightsSlides } from "../constant";
import { useRef } from "react";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utlis";

export default function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  const handleProcess = (type, i) =>{
  switch (type) {
    case "video-end":
      setVideo((prevVideo) => ({ ...prevVideo, isEnd: true, videoId: i + 1 }));
      break;

    case "video-last":
      setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }));
      break;

    case "video-reset":
      setVideo((prevVideo) => ({
        ...prevVideo,
        isLastVideo: false,
        videoId: 0,
      }));
      break;

    case "play":
      setVideo((prevVideo) => ({ ...prevVideo, isPlaying: !prevVideo.isPlaying }));
      break;

    default:
      break;
  }
  }

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      }
    else{
        startPlay && videoRef.current[videoId].play()
    }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgess = 0;
    let Span = videoSpanRef.current;

    if (Span[videoId]) {
      let anim = gsap.to(Span[videoId], {
        onUpdate: () => {},

        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="max-sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  ref={(el) => videoRef.current[i]}
                  onPlay={() => {
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }));
                  }}
                  playsInline={true}
                  muted
                  preload="auto"
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((listing) => (
                  <p className="md:text-2xl text-xl font-medium" key={listing}>
                    {listing}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-700 backdrop-blur-0 rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-300 rounded-full relative cursor-pointer"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className="absolute h-full w-full rounded-full"
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
            <img src={isLastVideo ? replayImg : !isPlaying
            ? playImg : pauseImg
            } alt={ isLastVideo ? 'replay' : !isPlaying? 'play' : 'pause'} 
            onClick={isLastVideo ? () =>  handleProcess('video-reset') : !isPlaying ? ()=> handleProcess('play'): ()=> handleProcess('pause') }
            />
        </button>
      </div>
    </>
  );
}
