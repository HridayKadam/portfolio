"use client";

type Props = {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
};

export function TrafficLights({ onClose, onMinimize, onMaximize }: Props) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Window controls">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-inner transition hover:brightness-110"
      />
      <button
        type="button"
        aria-label="Minimize"
        onClick={onMinimize}
        className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner transition hover:brightness-110"
      />
      <button
        type="button"
        aria-label="Maximize"
        onClick={onMaximize}
        className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner transition hover:brightness-110"
      />
    </div>
  );
}
