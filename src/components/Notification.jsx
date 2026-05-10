import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm">
      <div className={`bg-card border border-border rounded-lg shadow-lg p-4 transition-transform duration-700 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              I am currently accepting short-term projects. Starting in July, I will be expanding my capacity for larger, long-term collaborations.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="ml-2 p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Close notification"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};