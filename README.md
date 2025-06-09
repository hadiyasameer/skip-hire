# Skip Hire

A responsive React-based web application that allows users to view and select various skip sizes with detailed information and a modern UI.

## Features

- ✅ Live skip data from external API
- 🌓 Dark / Light mode toggle (with preference saved)
-  🪄  Modal with skip details
- 🌀 Loading spinner while fetching data
- 📱 Fully responsive layout using Tailwind CSS
- ♻️ Checkout details implemented as a sidebar 

---

## 💡 Project Structure & Approach

This project was bootstrapped with **Vite** and uses **React** for UI and **Tailwind CSS** for styling. Here's the overall approach:

1. **Fetching Data:**
   - Fetches live skip data from an API (`https://app.wewantwaste.co.uk/api/skips/...`) on page load using `useEffect`.
   - Shows a loading spinner until data is loaded.

2. **State Management:**
   - `useState` is used for tracking skips, modal state (`selectedSkip`), dark mode, and loading state.

3. **Dark Mode Handling:**
   - Toggle button switches between themes.
   - Preference is saved to `localStorage` and applied on initial load.
   - Uses `document.documentElement.classList` to apply Tailwind’s `dark:` styles globally.

4. **Skip Modal (Cart):**
   - Shows skip info in a centered modal.
   - Modal can be closed by clicking outside or the ✕ button.

---

## 🧪 Tech Stack

- **React** – UI components and state
- **Tailwind CSS** – Styling and responsiveness
- **Vite** – Fast bundler and dev server
- **React Icons** – Icons for toggling theme
- **Fetch API** – To get live skip data

---


