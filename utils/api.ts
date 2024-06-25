import axios from 'axios';

/**
 * Fetches a list of users from the API.
 * 
 * This function makes an HTTP GET request to the JSONPlaceholder API to retrieve a list 
 * of user data. It uses the axios library for the HTTP request. If a search query is provided,
 * it will append it to the URL as a query parameter.
 * 
 * @param {string | null} [searchQuery] - An optional search query to filter users.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of user objects.
 * 
 * @example
 * // Fetch all users
 * fetchUsers().then(users => {
 *   console.log(users);
 * }).catch(error => {
 *   console.error("Failed to fetch users:", error);
 * });
 * 
 * @example
 * // Fetch users with a search query
 * fetchUsers('John').then(users => {
 *   console.log(users);
 * }).catch(error => {
 *   console.error("Failed to fetch users:", error);
 * });
 * 
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
export const fetchUsers = async (searchQuery?: string | null) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await axios.get(url, {
    params: searchQuery ? { q: searchQuery } : {},
  });
  return response.data;
}
