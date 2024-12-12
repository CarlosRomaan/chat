import { MessageSimple, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  const { handleOpenThread, message } = useMessageContext();

  return (
    <MessageSimple 
      message={{ ...message, user: {} }}
    />
  );
}

export default TeamMessage;