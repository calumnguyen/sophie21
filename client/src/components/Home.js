import React, { useState, useRef } from 'react';
import Player from './Player';
import Song from './Song';
import Library from './Library';
import Nav from './Nav';
import '../styles/app.scss';
import data from '../data';

function HomePage() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const anime = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: anime,
    });
  };

  const audioRef = useRef(null);

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        currentSong={currentSong}
      />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        timeUpdateHandler={timeUpdateHandler}
        songEndHandler={songEndHandler}
      />
      <Library
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default HomePage;
