import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddIcon from "@mui/icons-material/Add";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CategoryIcon from "@mui/icons-material/Category";
import ChatMessage from "./ChatMessage";

export default function Chat() {
  return (
    <div className="chat">
      {/* chatHeader */}
      {/* <ChatHeader /> */}
      {/* chatMessage */}
      <div className="chatMessage">
        {/* <ChatMessage />
        <ChatMessage />
        <ChatMessage /> */}
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddIcon />
        <form>
          <input type="text" placeholder="#一般へメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon sx={{ fontSize: 32 }} />
          <GifBoxIcon sx={{ fontSize: 32 }} />
          <EmojiEmotionsIcon sx={{ fontSize: 32 }} />
          <CategoryIcon sx={{ fontSize: 32 }} />
        </div>
      </div>
    </div>
  );
}
