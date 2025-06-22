<template>
  <nav class = "bg-white w-full font-sans">
    <div class = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class = "flex flex flex-col justify-between h-auto items-center">
        <!-- Logo -->
        <div class = "flex items-center pb-5">
          <div class = "text-center">
            <p class = "text-sm font-light text-gray-500">the</p>
            <p class = "text-3xl font-bold">350F</p>
            <p class = "text-xs tracking-widest font-medium">DESSERT & MORE</p>
          </div>
        </div>

        <!-- Desktop: Menu -->
        <ul class = "hidden md:flex gap-6">
            <router-link class = "!text-black" to = "/">Trang chủ</router-link>
            <router-link class = "!text-black" to = "/about">Giới thiệu</router-link>
            <router-link class = "!text-black" to = "/cart">
                Giỏ hàng
                <span class = "text-orange-500">0</span>
            </router-link>
        </ul>

        <!-- Mobile: Menu button -->
        <div class = "md:hidden absolute top-15 left-5">
            <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
                <svg v-if = "!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <!-- Mobile: Cart -->
        <div class = "md:hidden absolute top-15 right-5">
            <router-link class = "!text-black" to = "/cart">
                Giỏ hàng
                <span class = "text-orange-500">0</span>
            </router-link>
        </div>

        <!-- Mobile: Menu -->
        <div v-if = "isOpen" class = "md:hidden flex flex-col space-y-4">
            <router-link class = "!text-black" to = "/">Trang chủ</router-link>
            <router-link class = "!text-black" to = "/about">Giới thiệu</router-link>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>