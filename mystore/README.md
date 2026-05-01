# 🛍️ MyStore — Angular E-Commerce Application

A fully functional single-page e-commerce application built with **Angular 17**, featuring a product catalog, shopping cart, checkout flow, and order confirmation.

---

## ✨ Features

- **Product List Page** — Browse all products with category filtering and add-to-cart functionality
- **Product Detail Page** — View full product info with quantity controls
- **Shopping Cart** — View, update quantities, and remove items; shows live order total
- **Checkout Form** — Validated template-driven form collecting personal, shipping, and payment info
- **Order Confirmation** — Success page with unique order ID after checkout
- **Live Cart Badge** — Header shows item count in real time

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── models/
│   │   ├── product.model.ts       # Product TypeScript interface
│   │   └── cart-item.model.ts     # CartItem TypeScript interface
│   ├── services/
│   │   ├── product.service.ts     # Fetches products via HttpClient
│   │   └── cart.service.ts        # Manages cart state with BehaviorSubject
│   ├── components/
│   │   ├── header/                # Sticky nav with live cart badge
│   │   ├── product-list/          # Product grid with category filter
│   │   ├── product-detail/        # Single product detail view
│   │   ├── cart/                  # Cart page with totals
│   │   ├── checkout/              # Validated checkout form
│   │   └── order-confirmation/    # Success page
│   ├── app-routing.module.ts      # SPA routing config
│   └── app.module.ts              # Root module
└── assets/
    └── data.json                  # Product data
```

---

## 🚀 Installation & Launch

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

### Steps

```bash
# 1. Clone or unzip the project
cd mystore

# 2. Install dependencies
npm install

# 3. Start the dev server
ng serve

# 4. Open in browser
# Navigate to http://localhost:4200
```

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Angular 17 | SPA framework |
| TypeScript | Type-safe components & models |
| Angular Router | Client-side navigation |
| FormsModule (ngModel) | Template-driven form binding |
| HttpClient | Fetching product data |
| RxJS BehaviorSubject | Reactive cart state sharing |

---

## 📋 Angular Concepts Demonstrated

- ✅ `*ngFor` — Loop over product lists
- ✅ `*ngIf` — Conditional rendering
- ✅ `[(ngModel)]` — Two-way data binding in forms
- ✅ `@Input` / `@Output` — Parent-child communication
- ✅ `RouterLink` / `router-outlet` — SPA navigation
- ✅ Services + BehaviorSubject — Sibling component data sharing
- ✅ Template-driven form validation — Required, minlength, pattern
- ✅ Pipes — `number`, `slice`
- ✅ Event bindings — `(click)`, `(change)`, `(ngSubmit)`

---

## 🎨 Design

Clean, professional dark/red theme inspired by modern e-commerce platforms. Fully responsive for desktop and mobile.
