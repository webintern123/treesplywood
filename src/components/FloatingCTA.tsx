import { MessageCircle, X, Send, ChevronDown, Phone, Mail, Package, FileText } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';

interface FloatingCTAProps {
  onNavigate?: (page: string) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: QuickReply[];
}

interface QuickReply {
  text: string;
  action: string;
}

export function FloatingCTA({ onNavigate }: FloatingCTAProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello! Welcome to The Trees Plywood. I'm here to help you find the perfect plywood solution. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        { text: '📦 View Products', action: 'products' },
        { text: '📞 Contact Sales', action: 'contact' },
        { text: '📄 Get Samples', action: 'samples' },
        { text: '💡 Learn More', action: 'about' },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot', quickReplies?: QuickReply[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      quickReplies,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getBotResponse = (userMessage: string): { text: string; quickReplies?: QuickReply[] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Product inquiries
    if (lowerMessage.includes('product') || lowerMessage.includes('plywood') || lowerMessage.includes('type')) {
      return {
        text: "We offer premium plywood solutions including Samrat (Premium), Bhima (Marine Grade), Ananta (Structural), Agni (Fire-Resistant), Vajra (Resilient), Ujval (Interior), Block Board, and Flush Doors. Each is engineered for specific applications. Would you like to explore our product catalog?",
        quickReplies: [
          { text: '🔍 View All Products', action: 'products' },
          { text: '🌊 Bhima Marine', action: 'marine' },
          { text: '🏢 Samrat Premium', action: 'commercial' },
          { text: '🔥 Agni Fire-Safe', action: 'decorative' },
        ],
      };
    }

    // Sample requests
    if (lowerMessage.includes('sample') || lowerMessage.includes('test')) {
      return {
        text: "Great! We offer free product samples delivered to your location. You can request samples through our contact form or call us directly at +91 9091744744. Would you like to proceed?",
        quickReplies: [
          { text: '📋 Contact Form', action: 'contact' },
          { text: '📞 Call Now', action: 'phone' },
          { text: '🔙 Back to Menu', action: 'menu' },
        ],
      };
    }

    // Price inquiries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return {
        text: "For accurate pricing based on your specific requirements (quantity, size, finish), please contact our sales team. We provide customized quotes for all projects.",
        quickReplies: [
          { text: '📞 Call Sales', action: 'phone' },
          { text: '✉️ Email Quote', action: 'contact' },
          { text: '📄 View Products', action: 'products' },
        ],
      };
    }

    // Specifications
    if (lowerMessage.includes('spec') || lowerMessage.includes('size') || lowerMessage.includes('thickness')) {
      return {
        text: "Our plywood is available in various sizes (8'x4', 7'x4', 6'x4') and thickness options (4mm to 25mm). We also offer custom sizes for large projects. Visit our products page for detailed specifications.",
        quickReplies: [
          { text: '📐 View Specs', action: 'products' },
          { text: '🎯 Custom Order', action: 'contact' },
          { text: '📞 Technical Support', action: 'phone' },
        ],
      };
    }

    // Certifications
    if (lowerMessage.includes('certified') || lowerMessage.includes('iso') || lowerMessage.includes('quality')) {
      return {
        text: "We're ISO 9001:2015 certified, FSC certified for sustainable forestry, BIS approved, and meet E0/E1 emission standards. All our products undergo 50+ quality checks per sheet.",
        quickReplies: [
          { text: '🏆 Learn More', action: 'about' },
          { text: '📊 Calculator', action: 'calculator' },
          { text: '📄 View Products', action: 'products' },
        ],
      };
    }

    // Contact/Location
    if (lowerMessage.includes('contact') || lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('visit')) {
      return {
        text: "📍 Head Office: Plot 3-538, 1st floor, Sri Krishna Heights, Madhapur, Hyderabad 500018\n📞 Phone: +91 9091744744\n📧 Sales: sales@thetreesplywood.com\n📧 General: info@thetreesplywood.com\n⏰ Hours: Mon-Sat, 9AM-6PM IST",
        quickReplies: [
          { text: '📞 Call Now', action: 'phone' },
          { text: '✉️ Sales Email', action: 'email-sales' },
          { text: '✉️ General Email', action: 'email-general' },
          { text: '📋 Contact Form', action: 'contact' },
        ],
      };
    }

    // Default response
    return {
      text: "I'm here to help! You can ask me about our products, request samples, get pricing information, or contact our team. What would you like to know?",
      quickReplies: [
        { text: '📦 Products', action: 'products' },
        { text: '📞 Contact', action: 'contact' },
        { text: '📄 Samples', action: 'samples' },
        { text: '💡 About Us', action: 'about' },
      ],
    };
  };

  const handleQuickReply = (action: string) => {
    let userMessage = '';
    let shouldNavigate = false;

    switch (action) {
      case 'products':
        userMessage = 'Show me your products';
        shouldNavigate = true;
        break;
      case 'contact':
        userMessage = 'I want to contact you';
        shouldNavigate = true;
        break;
      case 'samples':
        userMessage = 'I need product samples';
        break;
      case 'about':
        userMessage = 'Tell me about The Trees Plywood';
        shouldNavigate = true;
        break;
      case 'calculator':
        userMessage = 'I want to use the sheet calculator';
        shouldNavigate = true;
        break;
      case 'dealers':
        userMessage = 'Where can I find dealers?';
        shouldNavigate = true;
        break;
      case 'blogs':
        userMessage = 'Show me your blog articles';
        shouldNavigate = true;
        break;
      case 'phone':
        window.location.href = 'tel:+919091744744';
        return;
      case 'email-sales':
        window.location.href = 'mailto:sales@thetreesplywood.com';
        return;
      case 'email-general':
        window.location.href = 'mailto:info@thetreesplywood.com';
        return;
      case 'email':
        window.location.href = 'mailto:info@thetreesplywood.com';
        return;
      case 'marine':
        userMessage = 'Tell me about Bhima marine grade plywood';
        break;
      case 'commercial':
        userMessage = 'Tell me about Samrat premium plywood';
        break;
      case 'decorative':
        userMessage = 'Tell me about Agni fire-resistant plywood';
        break;
      case 'menu':
        userMessage = 'Show me the main menu';
        break;
      default:
        return;
    }

    // Add user message
    addMessage(userMessage, 'user');

    // Show typing indicator
    setIsTyping(true);

    // Navigate if needed
    if (shouldNavigate) {
      setTimeout(() => {
        onNavigate?.(action);
        setIsChatOpen(false);
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Simulate bot thinking
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(userMessage);
      addMessage(response.text, 'bot', response.quickReplies);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    addMessage(inputValue, 'user');
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking and respond
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(inputValue);
      addMessage(response.text, 'bot', response.quickReplies);
    }, 800);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      {isChatOpen && (
        <div className="glass-card rounded-2xl shadow-2xl w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] flex flex-col overflow-hidden animate-scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-trees-primary to-trees-secondary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold">The Trees Assistant</h3>
                <p className="text-white/80 text-xs">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/40 to-white/60">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-trees-primary text-white'
                      : 'bg-white/90 text-gray-800'
                  } rounded-2xl px-4 py-3 shadow-md`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  
                  {/* Quick Replies */}
                  {message.quickReplies && message.sender === 'bot' && (
                    <div className="mt-3 space-y-2">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply.action)}
                          className="block w-full text-left bg-trees-primary/10 hover:bg-trees-primary hover:text-white text-trees-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        >
                          {reply.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/90 rounded-2xl px-4 py-3 shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white/80 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-white border-gray-200"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-trees-primary hover:bg-trees-secondary disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by The Trees Plywood AI
            </p>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="group relative bg-gradient-to-r from-trees-primary to-trees-secondary hover:from-trees-secondary hover:to-trees-primary text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
          </>
        )}
        
        {!isChatOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            💬 Chat with us!
          </span>
        )}
      </button>

      {/* Request Sample Button */}
      <button
        onClick={() => onNavigate?.('contact')}
        className="group relative bg-white hover:bg-gray-50 text-trees-primary border-2 border-trees-primary px-6 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        title="Request Sample"
      >
        <Package className="w-5 h-5" />
        <span className="font-semibold text-sm">Request Sample</span>
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Get free samples delivered
        </span>
      </button>
    </div>
  );
}
