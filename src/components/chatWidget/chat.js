import React from 'react'
import './index.css'
import Iconify from '../iconify';
// ----------------------------------------------------------------------

export default function Chat() {
  return (
    <div className="chat-widget">
    <div className="chat-icon">
    <Iconify icon="bi:chat" width={24} height={24} />
    </div>
    <div className="chat-tooltip">Chat with us</div>
  </div>
  )
}
