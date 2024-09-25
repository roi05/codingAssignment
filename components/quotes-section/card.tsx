import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'w-[352px] p-4 h-[188px] tab-l:w-[216px] tab-l:h-[271px] desktop:w-[288px] desktop:h-[361px] bg-white z-10 opacity-70 hover:-translate-y-2 hover:scale-105 shadow-xl transition-transform duration-300 ease-in-out rounded-sm',
        className
      )}>
      {children}
    </div>
  );
}

export default Card;
