# Product Requirements Document (PRD)  
**Project:** JR Tax Preparation Website Redesign  
**Last Updated:** 2025-04-10  
**Owner:** Joe Schneider (JR Tax Preparation)

---

## 1. Overview

This project aims to redesign the JR Tax Preparation website to ensure a modern, responsive, and user-friendly experience. The new website will be built solely using HTML, CSS, and JavaScript, focusing on fast performance, accessibility, and ease of use. The redesign emphasizes clear communication of tax services and includes interactive elements such as a cost estimator, a secure document upload interface, and more.

---

## 2. Purpose & Goals

- **Modern Aesthetic:** Create a visually appealing and professional design that reflects the brand identity.
- **User-Friendly Experience:** Ensure the site is intuitive, accessible, and responsive across all devices.
- **Functional Focus:** Include key sections such as Homepage, Services, Pricing, Cost Estimator, Secure Document Upload, and Contact.
- **SEO Optimized:** Use semantic HTML5, meta descriptions, and best practices to improve search engine visibility.
- **Maintainability:** Write clean, well-commented code that is easy to update and expand over time.

---

## 3. Scope

### In Scope

- **Homepage Redesign:** A modern homepage that includes:
  - Business information (address, phone, email, operating hours)
  - Introductory message and call-to-action
  - Interactive countdown timer for “Next Tax Filing Due Date”
  - Service area information (e.g., serviced towns and remote availability)
  - Design credit footer (e.g., "Design By TheBonJoe 2020")
- **Interactive Elements:**
  - Cost Estimator Tool: A simple JavaScript-based calculator that allows users to input their income and deductions to estimate tax service costs.
  - Secure Document Upload: An embedded file upload area (client-side only for the MVP).

### Out of Scope

- Back-end integrations (e.g., actual secure document storage, server-side form handling) – these will be simulated or stubbed.
- Advanced React-like state management or SPA frameworks; only HTML, CSS, and JavaScript are to be used.
- Extensive animations – the design should remain clean and uncluttered.

---

## 4. Requirements

### Functional Requirements

1. **Responsive Design:**  
   - The site should adapt to desktop, tablet, and smartphone screens using responsive CSS techniques (e.g., media queries, flexible grids).

2. **Navigation & Layout:**  
   - A clear header with the company name and a responsive navigation menu.
   - Footer with business and contact details plus design credits.

3. **Interactive Elements:**  
   - **Cost Estimator Tool:**  
     - Inputs for income and deductions.  
     - Dynamic display of an estimated cost (using simple JavaScript calculations).
   - **Countdown Timer:**  
     - Show time left until the next tax filing due date, updated dynamically.
   - **Secure Document Upload:**  
     - A file input element integrated into the page layout (client-side validation).

4. **SEO and Accessibility:**  
   - Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.).
   - Ensure all images include proper alt tags.
   - Include meta tags (description, viewport, charset) in the HTML head.

### Non-Functional Requirements

- **Performance:** The page must load quickly on all devices.
- **Maintainability:** Code should be modular, commented, and follow best practices for HTML, CSS, and JavaScript.
- **Usability:** Intuitive UI with clear call-to-action elements and feedback on user interactions (e.g., form validations).

---

## 5. Timeline & Milestones

- **Initial Mock-up:** 3 days
- **Internal Review & QA:** 2 days
- **Client Presentation:** 1 day
- **Revisions & Final Adjustments:** 2 days

---

## 6. Acceptance Criteria

- Fully responsive design tested on multiple devices.
- All interactive components are functional in the client-side demo.
- Codebase is clean, organized, and adequately commented.
- SEO and accessibility best practices are implemented.

---

## 7. References

- [Modern Responsive Design Best Practices](https://web.dev/responsive-web-design-basics/)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [JavaScript Form Validation](https://www.w3schools.com/js/js_validation.asp)
