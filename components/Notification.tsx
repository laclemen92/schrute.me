import { useEffect } from "preact/hooks";

interface NotificationProps {
  type: "success" | "error" | "info";
  message: string;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

export default function Notification({
  type,
  message,
  onClose,
  autoClose = true,
  duration = 5000,
}: NotificationProps) {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
  };

  const textColors = {
    success: "text-green-800",
    error: "text-red-800",
    info: "text-blue-800",
  };

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  };

  return (
    <div
      class={`fixed top-4 right-4 z-50 max-w-md p-4 border rounded-lg shadow-lg transition-all duration-300 ${
        bgColors[type]
      }`}
    >
      <div class="flex items-start">
        <div
          class={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
            type === "success"
              ? "bg-green-200"
              : type === "error"
              ? "bg-red-200"
              : "bg-blue-200"
          }`}
        >
          <span class={`text-sm font-bold ${textColors[type]}`}>
            {icons[type]}
          </span>
        </div>
        <div class="flex-1">
          <p class={`text-sm font-medium ${textColors[type]}`}>{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          class={`flex-shrink-0 ml-3 text-lg leading-none ${
            textColors[type]
          } hover:opacity-70`}
        >
          ×
        </button>
      </div>
    </div>
  );
}
