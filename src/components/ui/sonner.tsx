import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#432011] group-[.toaster]:border-[#A0522C]/20 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#432011]/70",
          actionButton: "group-[.toast]:bg-[#A0522C] group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-[#432011]/10 group-[.toast]:text-[#432011]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
