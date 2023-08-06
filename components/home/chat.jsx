'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { throttle } from '@/lib/throttle';
import { ChatLine, LoadingChatLine } from './chat-line';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'; // Remove duplicate import for PaperAirplaneIcon
import cx from 'classnames';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useMessages } from './useMessages';


// default first message to display in UI (not necessary to define the prompt)

const InitialMessage = ({ sendMessage, setLoading }) => {
  const questions = [
    'Age: I am 28 years old. \nCountry: I am currently living in the United States. \nIncome: My annual income is approximately $60,000. \nEducational Goal: My educational goal is to pursue a Masters degree in Business Administration (MBA) to advance my career in management.',
    'Age: I am 16 years old. Country: I am currently living in the United States. Income: As a student, I do not have a regular income yet. Educational Goal: My educational goal is to graduate high school with honors and secure a scholarship to study Computer Science at a top university, with the aim of becoming a software engineer.',
    'Age: I am 20 years old (younger than the previous examples). Country: I am from Kazakhstan. Income: As a college student, I work part-time and earn around 100,000 KZT per month. Educational Goal: My educational goal is to complete my Bachelors degree in Environmental Science. I am passionate about sustainability and want to contribute to solving environmental challenges in Kazakhstan and beyond. After graduation, I plan to pursue a Masters degree in Environmental Engineering to further specialize in this field and make a positive impact on our planets future.',
    'Age: I am 55 years old. Country: I reside in Canada. Income: My annual income is approximately $70,000. Educational Goal: My educational goal is to enroll in a series of online courses and workshops to develop my skills in digital marketing and social media management. I believe this knowledge will help me transition into a new career path and improve my employability in the digital age.',
  ];

  const handleButtonClick = (question) => {
    setLoading(true);
    sendMessage(question);
  };

  return (
    <div>
      <p className="text-gray-800">
        This is an Educational expert. Feel free to ask any question!
      </p>
      <div className="mt-4 flex gap-4">
        {questions.map((question, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-white border border-gray-300 rounded p-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            onClick={() => handleButtonClick(question)}
          >
            <AcademicCapIcon className="w-5 h-5" />
            <span>Question {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Chat() {
  const [input, setInput] = useState('');
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  let { messages, isMessageStreaming, loading, error, sendMessage } = useMessages();
  const setLoading = (val) => {
    loading = val;
  }

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      const bottomTolerance = 30;

      if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
        setAutoScrollEnabled(false);
      } else {
        setAutoScrollEnabled(true);
      }
    }
  };

  const scrollDown = useCallback(() => {
    if (autoScrollEnabled) {
      messagesEndRef.current?.scrollIntoView(true)
    }
  }, [autoScrollEnabled])
  const throttledScrollDown = throttle(scrollDown, 250);

  useEffect(() => {
    throttledScrollDown()
  }, [messages, throttledScrollDown]);

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])
// fjewkldfgjdlwfkgjnhdel;dfgkcnjdsel;fcgkvnfrmkldfmckgvnhdfsmeawsdfcgnvgf
  const handleInitialMessage = useCallback(async () => {
    setLoading(true);
    const initialMessage = 'Hi! I am an Educational expert. Provide me information about age, country, income, and educational goal!';
    sendMessage(initialMessage);
  }, [sendMessage]);

  useEffect(() => {
    handleInitialMessage();
  }, []);

  return (
    <div className="flex-1 w-full border-zinc-100 bg-white overflow-hidden">
      <div
        ref={chatContainerRef}
        className="flex-1 w-full relative max-h-[calc(100vh-4rem)] overflow-x-hidden"
        onScroll={handleScroll}
      >
        <div className="border-b border-black/10 bg-gray-50 text-gray-800">
          {messages.length === 1 && messages[0].role === 'assistant' && (
            <InitialMessage sendMessage={sendMessage} setLoading={setLoading} />
          )}
        </div>
        {messages.map(({ content, role }, index) => (
          <ChatLine key={index} role={role} content={content} isStreaming={index === messages.length - 1 && isMessageStreaming} />
        ))}

        {loading && <LoadingChatLine />}

        <div
          className="h-[152px] bg-white"
          ref={messagesEndRef}
        />
        <InputMessage
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          isLoading={loading || isMessageStreaming}
        />
      </div>
      <Toaster />
    </div>
  );
}


// export const initialMessages = [
//   {
//     role: 'assistant',
//     content: 'Hi! I am an Educational expert. Provide me information about age, country, income, and educational goal!',
//   },
// ];

// const handleButtonClick = (question) => {
//   setLoading(true);
//   sendMessage(question);
// };

const InputMessage = ({ input, setInput, sendMessage, loading }) => {
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);
  const [question, setQuestion] = useState(null);
  const [questionError, setQuestionError] = useState(null);
  const inputRef = useRef(null);
  const shouldShowLoadingIcon = loading || isGeneratingQuestion
  const inputActive = input !== '' && !shouldShowLoadingIcon

  const generateJeopardyQuestion = async () => {
    setIsGeneratingQuestion(true)
    setQuestionError(null)

    try {
      const res = await axios.get('/api/question')
      if (!res.data) {
        throw new Error('No question was found in the response.')
      }
      const question_data = res.data

      setQuestion(question_data)
      setInput(`The category is "${question_data.category}". ${question_data.question}`)
    } catch (err) {
      setQuestionError(err.message)
    } finally {
      setIsGeneratingQuestion(false)
    }
  }

  useEffect(() => {
    const input = inputRef?.current
    if (question && input) {
      input.focus()
      input.setSelectionRange(input.value.length, input.value.length)
    }
  }, [question, inputRef])

  useEffect(() => {
    if (questionError) {
      toast.error(questionError)
    }
  }, [questionError])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-white to-white flex flex-col items-center clear-both">
      <button
        className="mx-auto flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black text-sm hover:opacity-50 disabled:opacity-25"
        onClick={generateJeopardyQuestion}
        disabled={isGeneratingQuestion}
      >
        <div className="w-4 h-4">
        </div> {'Generate an academic opportunity for me'}
      </button>
      <div className="mx-2 my-4 flex-1 w-full md:mx-4 md:mb-[52px] lg:max-w-2xl xl:max-w-3xl">
        <div className="relative mx-2 flex-1 flex-col rounded-md border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] sm:mx-4">
          <input
            ref={inputRef}
            aria-label="chat input"
            required
            className="m-0 w-full border-0 bg-transparent p-0 py-3 pl-4 pr-12 text-black"
            placeholder="Type a message..."
            value={input}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(input)
                setInput('')
              }
            }}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            disabled={isGeneratingQuestion}
          />
          <button
            className={cx(
              shouldShowLoadingIcon && "hover:bg-inherit hover:text-inhert",
              inputActive && "bg-black hover:bg-neutral-800 hover:text-neutral-100",
              "absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 transition-colors")}
            type="submit"
            onClick={() => {
              sendMessage(input)
              setInput('')
            }}
            disabled={shouldShowLoadingIcon}
          >
            {shouldShowLoadingIcon
              ? <div className="h-6 w-6 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"></div>
              : <div className={cx(inputActive && "text-white", "w-6 h-6")}>
                <PaperAirplaneIcon />
              </div>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

// const useMessages = () => {
//   const [messages, setMessages] = useState(initialMessages)
//   const [isMessageStreaming, setIsMessageStreaming] = useState(false);
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null);

//   // send message to API /api/chat endpoint
//   const sendMessage = async (newMessage) => {
//     setLoading(true)
//     setError(null)
//     const newMessages = [
//       ...messages,
//       { role: 'user', content: newMessage },
//     ]
//     setMessages(newMessages)
//     const last10messages = newMessages.slice(-10) // remember last 10 messages

//     const response = await fetch('/api/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         messages: last10messages,
//       }),
//     })

//     console.log('Edge function returned.')

//     if (!response.ok) {
//       console.log(response)
//       setError(response.statusText)
//       setLoading(false)
//       return
//     }

//     // This data is a ReadableStream
//     const data = response.body
//     if (!data) {
//       return
//     }

//     // This data is a ReadableStream

//     setIsMessageStreaming(true)

//     const reader = data.getReader()
//     const decoder = new TextDecoder()
//     let done = false

//     let lastMessage = ''

//     while (!done) {
//       const { value, done: doneReading } = await reader.read()
//       done = doneReading
//       const chunkValue = decoder.decode(value)

//       lastMessage = lastMessage + chunkValue

//       setMessages([
//         ...newMessages,
//         { role: 'assistant', content: lastMessage },
//       ])

//       setLoading(false)
//     }

//     setIsMessageStreaming(false)
//   }

//   return {
//     messages,
//     isMessageStreaming,
//     loading,
//     error,
//     sendMessage,
//   }
// }




