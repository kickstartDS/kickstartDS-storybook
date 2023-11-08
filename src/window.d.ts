declare global {
  interface Window {
    _ks: {
      radio: {
        on: <D = any>(message: string, cb: (message: string, data?: D) => void) => string;
        once: <D = any>(message: string, cb: (message: string, data?: D) => void) => void;
        off: (token: string) => void;
        emit: <D = any>(message: string, data?: D) => boolean;
      };
    };
  }
}

export {};
