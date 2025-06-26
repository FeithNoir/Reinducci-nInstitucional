# Reinducción Institucional 🏢📖

A dynamic and responsive web application designed to serve as a modern knowledge base viewer. This tool is perfect for institutional or corporate environments, allowing users to load, navigate, and search through complex, structured documentation with ease. It transforms nested data into a clean, hierarchical, and easily digestible format.

## 🚀 Technologies Used

*   **HTML5**: For the core semantic structure of the application.
*   **CSS3**: For custom properties (variables) to handle theming and accent colors.
*   **Tailwind CSS**: A utility-first CSS framework for rapid, responsive, and modern UI development.
*   **JavaScript (ES6+)**: For all application logic, including dynamic content rendering from a JSON source, state management, and interactive features.

## ✨ Features

*   **📄 Dynamic Data Loading**: Loads all content from an external `.json` file, making the knowledge base easily updatable.
*   **Recursive Rendering Engine**: A powerful formatting function that can handle deeply nested objects and arrays, correctly displaying them as a hierarchy of titles, subtitles, and lists.
*   **Hierarchical Navigation**: An auto-generated sidebar lists all main sections, allowing for quick navigation through the document.
*   **🔍 Powerful Search**: A global search bar that filters content across all sections, including titles and all nested data, showing all relevant sections in one view.
*   **🎨 Theming & Customization**:
    *   Instantly switch between a comfortable **Dark Mode** and a clean **Light Mode**.
    *   Uses a distinct **accent color** for titles and subtitles to improve visual hierarchy and readability.
    *   Theme preference is saved in `localStorage` for a consistent user experience.
*   **📱 Fully Responsive Design**: Built with modern CSS to ensure a seamless and accessible experience on desktops, tablets, and smartphones.

## 🔮 Future Plans

This prototype serves as a robust foundation. Future development could include:

*   **Support for More Formats**: Adding parsers for Markdown (`.md`) or CSV files.
*   **In-Browser Editing**: Allowing authorized users to edit content directly in the interface and export an updated `.json` file.
*   **PDF/Print Export**: A function to generate a clean, printable version of any section.
*   **User Authentication**: Adding a login system to manage access to sensitive or internal documentation.
*   **Version History**: Ability to load and compare different versions of the documentation.

## 👨‍💻 Author

This project was developed by **[Feith Noir](https://github.com/FeithNoir)**.