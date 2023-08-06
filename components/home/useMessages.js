// useMessages.js
import { useState, useEffect } from 'react';

export const useMessages = () => {
  const [messages, setMessages] = useState([]); // Initial empty array of messages
  const [isMessageStreaming, setIsMessageStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // send message to API /api/chat endpoint
  const sendMessage = async (newMessage) => {
    setLoading(true);
    setError(null);
    const newMessages = [
      ...messages,
      { role: 'user', content: newMessage },
    ];
    setMessages(newMessages);
    const last10messages = newMessages.slice(-10); // remember last 10 messages

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: last10messages,
      }),
    });

    console.log('Edge function returned.');

    if (!response.ok) {
      console.log(response);
      setError(response.statusText);
      setLoading(false);
      return;
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    // This data is a ReadableStream

    setIsMessageStreaming(true);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: 'assistant', content: lastMessage },
      ]);

      setLoading(false);
    }

    setIsMessageStreaming(false);
  };

  useEffect(() => {
    // Your initial logic for fetching initial messages and handling streaming can be added here
    // You can set the initial messages using setMessages and handle streaming using setIsMessageStreaming
    // For the purpose of this example, we'll leave it empty
  }, []);

  return {
    messages,
    isMessageStreaming,
    loading,
    error,
    sendMessage,
  };
};
