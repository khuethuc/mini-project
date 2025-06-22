<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div v-if="loading">Đang tải sản phẩm...</div>
    <div v-else-if="error">Lỗi khi tải sản phẩm: {{ error.message }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductView
        v-for="product in data.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductView from '@/components/ProductView.vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_PRODUCTS } from '@/queries.js'

export default {
  name: 'HomeProducts',
  components: { ProductView },
  setup() {
    const { result: data, loading, error } = useQuery(GET_PRODUCTS)
    return { data, loading, error }
  }
}
</script>