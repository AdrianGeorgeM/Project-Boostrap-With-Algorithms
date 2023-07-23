# Project-Boostrap-With-Algorithms

## Overview

Welcome to **Les Petits Plats**, a website designed for users to search and discover recipes. This project aims to create a prototype for the website with a robust search functionality. A mockup and a JSON dataset containing 50 recipes were provided to simulate the database structure.

## Developed Skills

Throughout this project, the following skills have been honed:

- Deconstructing computational problems to identify efficient solutions. 🎯
- Developing algorithms to implement an effective recipe search functionality. 🔍

## Objectives

### Content

🎨 Building a user-friendly and visually appealing interface using **Bootstrap**.
🔍 Implementing a powerful search functionality.

### Search Functionality

To achieve this, the following objectives have been accomplished:

#### Preparation

📋 Developing an **Investigation Form** to compare two search algorithms and determine the recommended choice.
⏱️ Conducting performance tests to measure the number of operations per second for optimal efficiency.
📊 Creating **UML Activity Diagrams** for the core search algorithms and the entire search functionality, including main search and keyword search.

#### Details

The search functionality allows users to filter recipes along two axes:

1. 🔍 **Main Search**: The use case begins when the user enters at least 3 characters in the main search bar. The system searches for recipes that match the user's entry in the recipe title, recipe ingredient list, or recipe description. The interface is updated with the search results, displaying the first results as soon as possible.

2. 🔑 **Keyword Search**: The user can refine their search using the advanced search fields, such as ingredients, utensils, or devices. As the user fills in the field, keywords that do not correspond to the keystrokes in the field disappear, making the search more efficient. Search results are updated accordingly. The search returns must be an intersection of results, meaning that if the user adds the tags "coconut" and "chocolate" to the ingredients, they will retrieve recipes that have both coconut and chocolate.

## Requirements

To ensure a high-quality and seamless user experience, the project adheres to the following requirements:

- The HTML and CSS code must pass **W3C validation** without errors.
- The website must be **responsive**, providing a consistent experience across different devices. 📱💻
- **ESLint** is used to maintain clean and consistent JavaScript code.
- The user interface is developed using **Bootstrap 4**. 🎉
- No external library is used for the JavaScript implementation of the search engine.

## Challenges & Achievements

Throughout the project, the following challenges have been tackled and achievements accomplished:

🚀 **Module Organization**: Utilizing **modules** to organize JavaScript code, improving code maintainability and readability.

We are excited to present Les Petits Plats, a website that empowers users to explore a vast collection of delightful recipes through a user-friendly and efficient search functionality. Enjoy your culinary journey with Les Petits Plats! 🍽️🥗🍝