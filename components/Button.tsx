import React from 'react';
import './Button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text' | 'icon';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'filled', ...props }) => {
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) { ripple.remove(); }
    button.appendChild(circle);
  };

  const baseClasses = "relative overflow-hidden transition-all duration-300 ease-in-out focus:outline-none";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (props.onClick) { props.onClick(event); }
  };
  const vClasses = {
    filled: "flex items-center gap-3 justify-center bg-[var(--primary-color)] text-white hover:bg-opacity-90 font-semibold fluid-btn px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl rounded-full",
    outlined: "flex items-center gap-3 justify-center bg-[var(--primary-color)] text-white font-black rounded-2xl shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] fluid-btn px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl",
  text: "text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:bg-opacity-10 px-6 py-3 rounded-full font-semibold text-base sm:text-lg",
    icon: "text-current hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-2"
  }

  return (
    <button
  className={`${baseClasses} ${vClasses[variant]}`}
      {...props} onClick={handleClick}>
      {children}
    </button>
  );
}; export default Button;