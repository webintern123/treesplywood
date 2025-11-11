import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'number';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  success?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  helperText?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  success,
  placeholder,
  required = false,
  disabled = false,
  rows = 4,
  helperText,
}: FormFieldProps) {
  const hasError = Boolean(error);
  const showSuccess = success && !hasError && value.length > 0;

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      
      <div className="relative">
        {type === 'textarea' ? (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`
              ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
              ${showSuccess ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20 pr-10' : ''}
            `}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : helperText ? `${name}-helper` : undefined}
          />
        ) : (
          <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`
              ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
              ${showSuccess ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20 pr-10' : ''}
            `}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : helperText ? `${name}-helper` : undefined}
          />
        )}
        
        {/* Success indicator */}
        {showSuccess && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
        )}
        
        {/* Error indicator */}
        {hasError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>

      {/* Helper text or error message */}
      {hasError ? (
        <p 
          id={`${name}-error`}
          className="text-sm text-red-600 flex items-start gap-1"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p 
          id={`${name}-helper`}
          className="text-sm text-gray-500"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
