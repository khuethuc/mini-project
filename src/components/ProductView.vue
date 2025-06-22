<template>
  <div class="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
    <!-- Image -->
    <img
      :src="`@/assests/${product.image}`"
      :alt="product.name"
      class="w-full h-64 object-cover"
    />

    <!-- Out of stock -->
    <div
      v-if="!product.inStock"
      class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded"
    >
      Hết hàng
    </div>

    <!-- Info -->
    <div class="p-4">
      <h3 class="text-sm font-semibold text-gray-900 group-hover:text-orange-500">
        {{ product.name }}
      </h3>
      <p class="text-sm text-gray-700 mt-1">
        {{ formatPrice(product.price) }} VND
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('vi-VN')
    }
  }
}
</script>