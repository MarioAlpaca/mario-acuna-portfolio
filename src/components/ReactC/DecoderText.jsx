import { useRef, useState, useEffect } from "react";
import { useSpring, useMotionValue, useTransform, animate } from "framer-motion";

// El set de caracteres exacto que usa Hamish (Katakana)
const GLYPHS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

export const DecoderText = ({ text, className = "" }) => {
  const [output, setOutput] = useState("");
  
  // Usamos MotionValue para tener control total sin re-renderizar React innecesariamente
  const count = useMotionValue(0);
  
  // Un valor "redondeado" para saber en qué índice de letra vamos
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // La animación "Spring" (Resorte) configurada como la de Hamish
    // stiffness: 280 (Muy rápido/tenso)
    // damping: 18 (Frena en seco, sin rebotar ni flotar lento al final)
    const controls = animate(count, text.length, {
      type: "spring",
      stiffness: 40,
      damping: 18,
      onUpdate: (latest) => {
        let result = "";
        const pos = Math.round(latest);

        for (let i = 0; i < text.length; i++) {
          if (i < pos) {
            // 1. Si el resorte ya pasó por aquí, mostrar la letra REAL
            result += text[i];
          } else {
            // 2. Si no, mostrar un caracter JAPONÉS ALEATORIO
            result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setOutput(result);
      },
    });

    return () => controls.stop();
  }, [text]);

  return (
    // IMPORTANTE: Agregamos 'font-mono' aquí.
    // Esto obliga a que todas las letras tengan el mismo ancho,
    // eliminando el problema de la superposición.
    <span className={`font-mono ${className}`}>
      {output}
      <span className="sr-only">{text}</span>
    </span>
  );
};