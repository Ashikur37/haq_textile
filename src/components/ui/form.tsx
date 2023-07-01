export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
import * as React from "react"

interface FormItemProps extends InputProps {
    className?: string;
    message?: string;
    label: string;
}
interface TextAreaItemProps extends TextareaProps {
    className?: string;
    message?: string;
    label: string;
}
export const FormItem = ({ className, label, message, ...props }: FormItemProps) => {
    return <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        {props.children}
        {message && <p>{message}</p>}
    </div>
}
export const TextAreaItem = ({ className, label, message, ...props }: TextAreaItemProps) => {
    return <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  {...props} />
        {message && <p>{message}</p>}
    </div>
}
import { cn } from "@/lib/utils"


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
      return (
        <textarea
          className={cn(
            "flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  )
  Textarea.displayName = "Textarea"