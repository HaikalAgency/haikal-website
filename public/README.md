# Public Assets Folder

Place static assets (like pictures/images) in this folder.
In your React/Vite components, you can reference them directly with an absolute path starting from the root `/`.

For example, if you place `my-photo.jpg` in this directory, you can display it in your JSX/TSX files as:
```tsx
<img src="/my-photo.jpg" alt="My Photo" />
```

Or reference it in the images list:
```typescript
const images = [
  "/my-photo.jpg",
  // ... other images
];
```
