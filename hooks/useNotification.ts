import { useState } from "preact/hooks";

export interface NotificationData {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

export function useNotification() {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  const addNotification = (type: NotificationData["type"], message: string) => {
    const id = crypto.randomUUID();
    const notification: NotificationData = { id, type, message };

    setNotifications((prev) => [...prev, notification]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);

    return id;
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const success = (message: string) => addNotification("success", message);
  const error = (message: string) => addNotification("error", message);
  const info = (message: string) => addNotification("info", message);

  return {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    info,
  };
}
