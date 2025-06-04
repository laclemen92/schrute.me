import Notification from "@/components/Notification.tsx";
import type { NotificationData } from "@/hooks/useNotification.ts";

interface NotificationContainerProps {
  notifications: NotificationData[];
  onRemove: (id: string) => void;
}

export default function NotificationContainer(
  { notifications, onRemove }: NotificationContainerProps,
) {
  return (
    <div class="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          message={notification.message}
          onClose={() => onRemove(notification.id)}
        />
      ))}
    </div>
  );
}
