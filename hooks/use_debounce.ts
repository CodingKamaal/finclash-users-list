import { useEffect, useState } from "react";

/**
 * Custom React hook to debounce a value.
 * 
 * This hook delays updating the debounced value until after a specified delay period 
 * has passed since the last time the value changed. It is useful for optimizing 
 * performance in situations like searching, where you don't want to make an API call 
 * every time the user types a character.
 * 
 * @param {string} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds for debouncing.
 * @returns {string} - The debounced value.
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 * 
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Perform search operation
 *   }
 * }, [debouncedSearchTerm]);
 */
export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timer if the value or delay changes before the timer completes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
