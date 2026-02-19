# 🛒 ACQUIRE — E-Commerce Application

A full-stack e-commerce web application built with **React** (frontend) and **Express + Sequelize** (backend). Browse products, manage a cart, place orders, track packages, and view a payment summary — all in one place.

---

## 📸 Features

| Feature            | Description                                                  |
|--------------------|--------------------------------------------------------------|
| **Home Page**       | Browse a catalog of products and add them to your cart.      |
| **Checkout**        | Review cart items, choose a delivery option, and place orders. |
| **Orders**          | View past orders with product details.                       |
| **Track Package**   | Real-time package tracking with estimated delivery dates.    |
| **Payment Summary** | See a breakdown of item costs, shipping, and totals.         |
| **404 Page**        | A custom "Not Found" page for invalid routes.                |

---

## 🧰 Tech Stack

### Frontend (`Ecommerce-project/`)

| Technology      | Purpose                                   |
|-----------------|-------------------------------------------|
| React 19        | UI library for building components        |
| Vite            | Lightning-fast dev server & bundler       |
| React Router 7  | Client-side page routing                  |
| Axios           | HTTP client for API requests              |
| Day.js          | Lightweight date formatting library       |
| Vitest          | Unit testing framework                    |

### Backend (`ecommerce-backend-ai-main/`)

| Technology      | Purpose                                   |
|-----------------|-------------------------------------------|
| Express 4       | Node.js web framework for API routes      |
| Sequelize 6     | ORM for database models & queries         |
| SQLite (sql.js) | Lightweight file-based database           |
| CORS            | Cross-origin request handling             |
| Nodemon         | Auto-restarts server during development   |

---

## 📁 Project Structure

```
ACQUIRE/
├── Ecommerce-project/            # ⚛️  React Frontend
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── home/             # Product listing page
│   │   │   ├── checkout/         # Cart review & payment summary
│   │   │   ├── orders/           # Order history page
│   │   │   ├── TrackPage/        # Package tracking page
│   │   │   └── NotFoundPage/     # 404 page
│   │   ├── components/           # Shared/reusable React components
│   │   ├── utils/                # Helper/utility functions
│   │   ├── config.js             # API URL configuration
│   │   ├── App.jsx               # Root component with route definitions
│   │   └── main.jsx              # React entry point
│   ├── vercel.json               # Vercel deployment config (SPA rewrites)
│   ├── vite.config.js            # Vite bundler configuration
│   └── package.json
│
├── ecommerce-backend-ai-main/    # 🖥️  Express Backend
│   ├── routes/
│   │   ├── products.js           # GET /api/products
│   │   ├── cartItems.js          # CRUD /api/cart-items
│   │   ├── orders.js             # CRUD /api/orders
│   │   ├── deliveryOptions.js    # GET /api/delivery-options
│   │   ├── paymentSummary.js     # GET /api/payment-summary
│   │   └── reset.js              # POST /api/reset (reset DB to defaults)
│   ├── models/
│   │   ├── Product.js            # Product schema
│   │   ├── CartItem.js           # Cart item schema
│   │   ├── Order.js              # Order schema
│   │   ├── DeliveryOption.js     # Delivery option schema
│   │   └── index.js              # Sequelize instance & DB setup
│   ├── defaultData/              # Seed data loaded on first run
│   ├── images/                   # Product images served statically
│   ├── server.js                 # Express app entry point
│   ├── database.sqlite           # SQLite database file
│   └── package.json
│
└── README.md                     # ← You are here
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or later — [Download here](https://nodejs.org/)
- **npm** (comes bundled with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/OmSingh2007/Ecommerce-project.git
cd Ecommerce-project
```

### 2. Start the Backend

```bash
cd ecommerce-backend-ai-main
npm install
npm run dev
```

This starts the Express server on **`http://localhost:3000`** using Nodemon (auto-restarts on file changes).

> On first launch the server automatically creates the SQLite database and seeds it with default products, cart items, delivery options, and orders.

### 3. Start the Frontend

Open a **new terminal**:

```bash
cd Ecommerce-project
npm install
npm run dev
```

Vite starts the React dev server on **`http://localhost:5173`**.  
Open that URL in your browser to see the app.

---

## 🌐 API Endpoints

All API routes are prefixed with `/api`.

| Method   | Endpoint                     | Description                        |
|----------|------------------------------|------------------------------------|
| `GET`    | `/api/products`              | Fetch all products                 |
| `GET`    | `/api/cart-items`            | Fetch all cart items               |
| `POST`   | `/api/cart-items`            | Add a product to the cart          |
| `PUT`    | `/api/cart-items/:id`        | Update quantity / delivery option  |
| `DELETE` | `/api/cart-items/:id`        | Remove an item from the cart       |
| `GET`    | `/api/orders`                | Fetch all orders                   |
| `POST`   | `/api/orders`                | Place a new order                  |
| `GET`    | `/api/delivery-options`      | Fetch available delivery options   |
| `GET`    | `/api/payment-summary`       | Get payment totals for the cart    |
| `POST`   | `/api/reset`                 | Reset the database to default data |

> **Tip:** Append `?expand=product` to `/api/cart-items` to include full product details in the response.

---

## 🔑 Environment Variables

### Frontend (`Ecommerce-project/.env`)

| Variable             | Default                  | Description                      |
|----------------------|--------------------------|----------------------------------|
| `VITE_BACKEND_URL`   | `http://localhost:3000`  | Base URL of the backend API      |

Create a `.env` file in the `Ecommerce-project/` directory:

```env
VITE_BACKEND_URL=http://localhost:3000
```

### Backend

| Variable | Default | Description       |
|----------|---------|-------------------|
| `PORT`   | `3000`  | Server port number |

---

## 🚀 Deployment

### Frontend → Vercel

The frontend is configured for **Vercel** deployment with a `vercel.json` that rewrites all routes to `index.html` (for SPA client-side routing).

1. Push your code to GitHub.
2. Import the `Ecommerce-project` folder in [Vercel](https://vercel.com/).
3. Set the environment variable `VITE_BACKEND_URL` to your deployed backend URL.

### Backend → Render / Railway / Any Node Host

1. Push the `ecommerce-backend-ai-main` folder to a Git repo.
2. Deploy on a service like [Render](https://render.com/) or [Railway](https://railway.app/).
3. Set the `PORT` environment variable if required by the host.
4. Update the CORS `origin` array in `server.js` to include your deployed frontend URL.

---

## 🧪 Running Tests

The frontend uses **Vitest** and **React Testing Library**:

```bash
cd Ecommerce-project
npm test
```

---

## 🛠️ Available Scripts

### Frontend

| Command           | Action                       |
|-------------------|------------------------------|
| `npm run dev`     | Start Vite dev server        |
| `npm run build`   | Create production build      |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Run ESLint on source files   |
| `npm test`        | Run unit tests with Vitest   |

### Backend

| Command           | Action                              |
|-------------------|-------------------------------------|
| `npm start`       | Start server with Node              |
| `npm run dev`     | Start server with Nodemon (hot-reload) |

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **ISC License**.

---

> Built with ❤️ by [Om Singh](https://github.com/OmSingh2007)
