# 🛠️ DigiTools | Modern Digital Marketplace

**DigiTools** provides a seamless experience for browsing digital products and managing your shopping cart. Built with speed and responsiveness in mind, this project showcases a clean UI/UX following modern design principles.

---

## 🛠️ Core Technologies Used

The project is built with a focus on performance, clean code, and modern styling:

* **React.js:** Leveraging Functional Components and Hooks for dynamic state management.
* **Tailwind CSS & DaisyUI:** Used for a modern, utility-first design and pre-built aesthetic components to ensure a professional Figma-accurate look.
* **JavaScript (ES6+):** Clean and optimized logic for data filtering, cart calculations, and event handling.
* **React-Toastify:** Integrated for professional, real-time user feedback (Success/Error/Warning alerts).
* **JSON (Product Data):** All product information is managed through a structured JSON schema, including unique IDs, tags, features, and pricing models.

---

## ✨ Key Features

### 1. Advanced Cart Logic & Real-time Feedback
Integrated **React-Toastify** to provide instant alerts when adding or removing items. The cart count in the Navbar updates dynamically, and the "Proceed to Checkout" action provides a clean reset of all states with a single click.

### 2. Dynamic Component Toggling
Implemented a centralized toggle system that allows users to switch between the **Product Grid** (3-column layout) and the **Shopping Cart** (list layout). This ensures a clutter-free experience and better focus on the user's intent.

### 3. Data-Driven Product Cards
Each product is rendered from a local **JSON database**, showcasing price variations (Monthly/Yearly), custom tags (Popular/Best Seller), and an array-based feature list to help users make informed decisions.

---

## 🚀 Challenges Overcome

* **Selected Product Removal:** Developed a filtering logic to remove specific items from the cart while maintaining the state of other selected products.
* **Responsive Architecture:** Ensured the 3-column product grid adapts perfectly to 1-column layouts on mobile devices using Tailwind's responsive prefixes.
* **Toast Integration:** Customizing Toastify to match the brand identity of DigiTools for actions like "Added to Cart" and "Cart Cleared."

