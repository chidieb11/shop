What you will learn

    NextJS basics like setting up project, navigating between pages and data fetching
    NextJS advanced topics like dynamic routing, image optimization,  SSG and SSR
    Tailwind CSS framework to build responsive website using custom theme, animation and carousel
    ReactJS including decomposing components, context API and hooks
    Next Auth package to authenticate customers and admin users
    MongoDB and Mongoose to save and retrieve data like products, orders and users
    PayPal developer api to make online payment
    Deploy web applications on servers like Vercel and Netlify

Learn building this ecommerce website on Udemy with 90% discount: https://www.udemy.com/course/nextjs-ecommerce
Run it Locally

$ git clone https://github.com/basir/next-tailwind-amazona
$ cd next-tailwind-amazona
$ npm install
$ npm run dev
$ Open http://localhost:3000/api/seed
$ Open http://localhost:3000

Lessons

    Introduction
    Install Tools
    Create Next App
    Publish to Github
    Create Website Layout Inside the Components Dir
        1. create layout component
        2. add header
        3. add main section
        4. add footer
        5. add tailwind classes
            USAGE: This is components is getting used inside the 'index.js' page

    List Products Inside the Utils Dir Located Directly Inside the Main Dir.
        1. add data.js: Here we are creating an array of 'fake' data objects
        2. add images: Here we add the images we'd be needing inside the images dir contained inside the 'public' dir.
        3. render products: To do this, we go to the components dir and create a new component called 'ProductItem.js'
            USAGE: We get to use the component inside the 'index.js' page

    Create Product Details: yarn add -D @types/react. This dependency will help to handle 'type errors' that gets prompted eg slug. This activities is taking place inside the pages dir
        1. create product page
        2. create 3 columns
        3. show image in first column
        4. show product info in second column
        5. show add to cart action on third column
        6. add styles

    Handle Add To Cart
        1. define react context
        2. define cart items state
        3. create addd to cart action
        4. add reducer
        5. create store provider
        6. handle add to cart button

    Create Cart Page: The page is contained inside the pages dir. Called 'cart.js'
        1. create cart.js
        2. use context to get cart items
        3. list items in cart items
        4. redirect to cart screen after add to cart

    Update Quantity In The Cart
        1. add select box for quantity
        2. handle select box change

    Save Cart Items
        1. install js-cookie package: Then go into the Store.js component and import then use it
        2. save and retreive cart items in cookies: Here we also update the eslint file to reflect on the backend what we have on the frontend to avoid hydration error been prompted.

    Create Login Form: The login page is created inside the pages dir.
        1. install react hook form
        2. create input boxes
        3. add login button

    Connect To MongoDB
        1. install mongoose
        2. install mongodb or use mongodb atlas
        3. save connection url in .env file
        4. create db utils file
        5. create sample users: This is done inside a file called 'seed.js' embedded inside the 'api' dir that is contained in the 'pages' dir. To see the list of seeded users, run localhost:3000/api/seed to view the seeded response on the browser and also see the seeded users inside the mongodb database.

    Create Login API
        1. install next-auth
        2. create nextauth.js
        3. implement signin
        4. use signin in login form: install react-toastify --> To handle notifications for successful and failed logins. This is used in the 'Layout.js' component

    Add User Menu
        1. check user authentication
        2. install headlessui
        3. show user menu

    Create Shipping Screen
        1. display address fields
        2. save address in context

    Create Payment Method Screen
        1. dispaly payment methods
        2. save payment method in context

    Seed sample products
        1. create product model in mongoose
        2. insert sample products to mongodb

    Load Products MongoDB
        1. load products in home page from mongodb
        2. load products in product page from mongodb
        3. use product api to check count in stock in add to cart

    Create Place Order Screen
        1. display shipping address
        2. display payment method
        3. display order items
        4. implment create order

    Create Order Screen
        1. implement backend api for order details
        2. load order data from backend
        3. display order details

    Create Register Screen
        1. add signup api
        2. create register page
        3. call api on form submit

    Pay Order By PayPal
        1. add paypal button
        2. handle payment
        3. create backend api
        4. update order state

    Create Order History Screen
        1.create my order api
        2. create order history component
        3. fetch orders and display them

    Publish On Vercel
        1. create vercel account
        2. connect to github
        3. set next auth and mongodb db in env vars
        4. push code to github

    Update User Profile
        1. create profile screen
        2. show user info
        3. handle update user info

    Create Admin Dashboard
        1. Create Admin Menu
        2. create dashboard screen
        3. Implement admin summary api

    List Orders For Admin
        1. create orders page
        2. create orders api
        3. use api in page
