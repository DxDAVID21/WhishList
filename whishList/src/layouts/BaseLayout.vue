<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <header class="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border-b border-gray-300/40 dark:border-gray-700/40 sticky top-0 z-50">
    <nav class="max-w-5x1 mx-auto flex items-center justify-between px-4 py-3">
      <h1 class="text-x1 font-semibold">AnimeHub</h1>

      <div class="flex items-center gap-4">
        <RouterLink to="/" class="hover:text-blue-500 transition">Home</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/search" class="hover:underline">Search</RouterLink>
        <RouterLink to="/favorites" class="hover:text-blue-500 transition">Favorites</RouterLink>
      </div>
    </nav>
  </header>

  <main class="max-w-5x1 mx-auto px-4 py-6">
    <slot />
  </main>
  </div>
</template>