'use client'

import Svg from '../../../public/svg'

const Message = () => {
  return (
    <button
      className={`fixed bottom-[40px] right-[40px]  transition-opacity duration-300 [&_svg>rect]:hover:fill-asia-3
            `}
    >
      <Svg.Message />
    </button>
  )
}
export default Message
