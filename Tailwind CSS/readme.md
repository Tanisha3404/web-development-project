Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.

Setting up Tailwind CSS

1. npm init -y
2. npm install -D tailwindcss vite  //install required packages
3. npx tailwindcss init -p  //create postcss.config.js file
4. create a file named as "input.css" and add the following script in it
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. In tailwind.config.js file replace content:[] with content:["*"]
6. Also replace "test": "echo \"Error: no test specified\" && exit 1" with "start": "vite"
7. To start dev server: npm run start

Reference: https://tailwindcss.com/docs/installation
