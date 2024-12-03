import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import '@/index.css'
function PageContent(props: { children: React.ReactNode }) {
  const imageUrl = new URL(logo, import.meta.url).href;

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-y-2 px-2 py-4 text-center">
      <img src={imageUrl} width={50} alt="" />
      <h1>{props.children}</h1>
      <button
        type="button"
        className="rounded-md border border-gray-200 px-4 py-2"
        onClick={() => setCount((count) => count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default PageContent;
