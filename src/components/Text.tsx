import { clsx } from "clsx";
import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "md", children, asChild, className}: TextProps) {

    const Component = asChild ? Slot : 'span';


  return <Component className={clsx("text-gray-100 font-sans", {
    'text-xs' : size == 'sm',
    'text-sm' : size == 'md',
    'text-md' : size == 'lg',
    },
    className // Entra como uma variável do CLSX, com isso consigo passar outras classnames alem das setadas.
  )}>
    {children}
  </Component>;
}
