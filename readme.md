# 🔐 Random Password Generator

A clean, modern **Random Password Generator Web App** built using
**HTML, CSS, and Vanilla JavaScript**.
This tool instantly generates secure passwords containing uppercase,
lowercase, numbers, and symbols --- with one‑click copy support.

------------------------------------------------------------------------

## 🚀 Features

-   🔐 Secure 12‑character passwords
-   🔢 Includes uppercase, lowercase, numbers, symbols
-   ⚡ One‑click copy button
-   🎨 Modern, responsive UI
-   🔁 Generates a new password instantly
-   📱 Works on all major browsers

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **HTML5** --- Structure
-   **CSS3** --- Styling & layout
-   **JavaScript** --- Password logic & clipboard copy

------------------------------------------------------------------------

## 📂 Project Structure

    Random-Password-Generator
    │── index.html
    │── style.css
    └── main.js

------------------------------------------------------------------------

## ⚙️ How It Works

### 1. Character Sets

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '$#%|/@&\=';

### 2. Base Password Requirement

At least one from each category is added first.

### 3. Fill Remaining Characters

Random characters are added until the password reaches 12 characters.

### 4. Copy to Clipboard

Uses:

    passwordBox.select();
    document.execCommand('copy');

------------------------------------------------------------------------

## ▶️ How to Run

1.  Extract the project
2.  Open `index.html`
3.  Click **Generate Password**
4.  Click the copy icon to copy the password

------------------------------------------------------------------------

## 📌 Learning Outcomes

-   Random string creation
-   DOM manipulation
-   Clipboard copy
-   UI/UX layout design

------------------------------------------------------------------------

## 📌 Future Enhancements

-   Adjustable password length
-   Checkbox toggles for character types
-   Strength indicator
-   Dark/light theme

------------------------------------------------------------------------

## 📄 License

MIT License --- free to modify & reuse.


------------------------------------------------------------------------

## 👤 Author

**Debashis Patra**

Enjoy building and extending this creative HTML, CSS & JavaScript project! 🚀

