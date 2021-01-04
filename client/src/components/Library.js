import React from 'react';
import LibrarySongs from './LibrarySongs';

const Library = ({
  libraryStatus,
  setLibraryStatus,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
      }}
      className={`library ${libraryStatus ? 'active-library' : ' '}`}
    >
      <h2
        onClick={() => setLibraryStatus(!libraryStatus)}
        style={{
          cursor: 'pointer',
        }}
      >
        Library
      </h2>
      <div className='library-song'>
        {songs.map((song) => (
          <LibrarySongs
            id={song.id}
            key={song.id}
            songs={songs}
            song={song}
            setSongs={setSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
