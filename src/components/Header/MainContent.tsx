import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <h2 className="text-cyan-500 text-lg mb-2">Welcome to My Creative Space</h2>
      <h1 className="text-5xl font-bold mb-4">
        I'm a Creative Freelancer
        <br />
        Based In Nigeria
      </h1>
      <p className="text-lg mb-6">
        I concentrate on creating digital experiences that are user-friendly, enjoyable, and effective in achieving their purpose.
      </p>
      <a className="bg-cyan-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-cyan-600 transition duration-300" href="#">
        Let's Talk
      </a>
      <div className="absolute bottom-0 left-0 right-0">
        <img
          alt="Decorative wave pattern"
          className="w-full"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/A3f_tf4-eJQZr6WarKfPfxmrAtAmuTjTbWBLVe5K5Ic.jpg"
          width="1200"
        />
      </div>
    </main>
  );
};

export default MainContent;
