import React from 'react';

function Baner(props) {
  return (
    <div className='flex items-center justify-center h-[650px] flex-col text-center'>
      <h2 className=' text-2xl text-gray-700 mb-2 '>
        Не знаете куда поехать? <br /> Отлично!!!
      </h2>
      <button
        className='font-bold text-purple-500 bg-white px-12 py-4 rounded-full 
      shadow-2xl text-2xl transition-all hover:drop-shadow-2xl active:scale-90'
      >
        Гибкий поиск
      </button>
    </div>
  );
}

export default Baner;
