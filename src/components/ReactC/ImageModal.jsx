import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImageModal = ({ src, alt, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. EL BOTÓN TRANSPARENTE (TRIGGER) */}
      {/* Este div invisible cubre la tarjeta para detectar el clic */}
      <div 
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Ver certificado de ${title}`}
      ></div>

      {/* 2. LA VENTANA MODAL (PORTAL) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
            
            {/* Fondo Oscuro (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary-bg/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Contenedor de la Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-w-5xl w-full bg-primary-bg border border-accent-dim/20 shadow-2xl rounded-sm overflow-hidden flex flex-col"
            >
              
              {/* Barra de Título (Estilo Ventana) */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-accent-dim/20 bg-accent-light/5">
                <span className="font-mono text-xs text-accent-dim tracking-widest uppercase">
                  PREVIEW: {title}
                </span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-accent-dim hover:text-red-400 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* La Imagen */}
              <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                 <img 
                   src={src} 
                   alt={alt} 
                   className="max-w-full max-h-[80vh] object-contain"
                 />
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};