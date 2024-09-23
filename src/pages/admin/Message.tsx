import React, { useEffect, useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useCreateMessageMutation,
  useGetMessagesQuery,
  useGetReceiverQuery,
} from "../../redux/features/Student Management/messages";
import io from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    month: "long", // e.g., "September"
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const Message = () => {
  const sender = useSelector(selectCurrentUser);
  const [receiver, setReceiver] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const { data: messagesData, refetch: refetchMessages } = useGetMessagesQuery(
    receiver ? { sender: sender?.id, receiver } : { skip: true }
  );

  const { data: receiverData } = useGetReceiverQuery({
    sender: sender?.id,
  });

  const [createMessage] = useCreateMessageMutation();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData.data);
    }
  }, [messagesData]);

  const handleReceiveMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => {
      const messageExists = prevMessages.some(
        (msg) => msg._id === newMessage._id
      );
      if (!messageExists) {
        return [...prevMessages, newMessage];
      }
      return prevMessages;
    });
  }, []);

  useEffect(() => {
    socket.on("connect", () => setSocketConnected(true));
    socket.on("disconnect", () => setSocketConnected(false));
    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [handleReceiveMessage]);

  useEffect(() => {
    if (sender?.id && socketConnected) {
      socket.emit("joinRoom", sender.id);
    }
  }, [sender?.id, socketConnected]);

  const onSubmit = async (data) => {
    if (receiver) {
      const message = {
        sender: sender?.id,
        receiver,
        content: data.message,
        timestamp: new Date().toISOString(), // Add timestamp here
      };
      try {
        const result = await createMessage(message).unwrap();
        socket.emit("sendMessage", result.data);
        setMessages((prevMessages) => [...prevMessages, result.data]);
      } catch (error) {
        console.error("Failed to send message:", error);
      }
      reset();
    }
  };

  useEffect(() => {
    if (receiver) {
      refetchMessages();
    }
  }, [receiver, refetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen antialiased text-gray-800 bg-white -mx-7 -my-9">
      <div className="flex flex-row h-full w-full overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col py-10 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          {/* Search User Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
              Search User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
          </div>

          {/* Profile Card */}
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold mt-2">{sender?.name}</div>
            <div className="text-xs text-gray-500">{sender?.role}</div>
          </div>

          {/* Active Conversations */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                {receiverData?.data ? receiverData.data.length : 0}
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {receiverData?.data?.map((receiverDetail) => (
                <button
                  key={receiverDetail._id}
                  onClick={() => setReceiver(receiverDetail._id)}
                  className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    {receiverDetail.name.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm font-semibold">
                    {receiverDetail.name}
                  </div>
                </button>
              )) || <div>No active conversations</div>}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col flex-auto h-full p-6">
          {receiver ? (
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              {/* Topper Bar */}
              <div className="flex flex-row items-center justify-between bg-gray-300 rounded-lg p-2">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    {receiverData?.data
                      ?.find((r) => r._id === receiver)
                      ?.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">
                      {
                        receiverData?.data?.find((r) => r._id === receiver)
                          ?.name
                      }
                    </h2>
                    <p className="text-sm text-gray-500">..............</p>
                  </div>
                </div>
                <div>
                  {socketConnected ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      Active Now
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                      Disconnected
                    </span>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`${
                          message.sender === sender?.id
                            ? "col-start-6 col-end-13"
                            : "col-start-1 col-end-8"
                        } p-3 rounded-lg`}>
                        <div
                          className={`flex ${
                            message.sender === sender?.id
                              ? "flex-row-reverse"
                              : "flex-row"
                          } items-center`}>
                          <div
                            className={`flex items-center justify-center h-10 m-3 w-10 rounded-full ${
                              message.sender === sender?.id
                                ? "bg-indigo-500"
                                : "bg-indigo-300"
                            } flex-shrink-0`}>
                            {message.sender === sender?.id ? "Me" : "Them"}
                          </div>
                          <div
                            className={`relative ml-3 text-sm py-2 px-5 shadow rounded-xl ${
                              message.sender === sender?.id
                                ? "bg-indigo-100"
                                : "bg-white"
                            }`}>
                            <div>{message.content}</div>
                          </div>
                          <p className="text-xs text-gray-500 ml-2">
                            {formatTimestamp(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                  <input
                    type="text"
                    {...register("message", { required: true })}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    placeholder="Type your message here..."
                  />
                </div>
                <div className="ml-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>Select a user to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
