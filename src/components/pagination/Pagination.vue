<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li class="pagination__item">
        <button
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          type="button"
          class="pagination__btn"
        >
          ‹‹
        </button>
      </li>

      <li class="pagination__item">
        <button
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          type="button"
          class="pagination__btn"
        >
          ‹
        </button>
      </li>

      <li v-for="page in pages" :key="page.key" class="pagination__item">
        <button
          @click="onClickPage(page.key)"
          :disabled="page.isDisabled"
          type="button"
          class="pagination__btn"
          :class="{ 'pagination__btn--active': isPageActive(page.key) }"
        >
          {{ page.key }}
        </button>
      </li>

      <li class="pagination__item">
        <button
          @click="onClickNextPage"
          :disabled="isInLastPage"
          type="button"
          class="pagination__btn"
        >
          ›
        </button>
      </li>

      <li class="pagination__item">
        <button
          @click="onClickLastPage"
          :disabled="isInLastPage"
          type="button"
          class="pagination__btn"
        >
          ››
        </button>
      </li>
    </ul>
    <p class="pagination__per-page-text">Items per page:</p>
    <input
      :value="perPage"
      @input="onPerPageChange"
      type="number"
      :min="1"
      class="pagination__per-page"
    />
  </div>
</template>

<script>
export default {
  props: {
    totalItems: { type: Number, required: false },
    maxVisibleButtons: { type: Number, required: false, default: 3 },
    totalPages: { type: Number, required: true },
    perPage: { type: Number, required: true },
    currentPage: { type: Number, required: true },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
    startPage() {
      if (this.isInFirstPage) {
        return 1
      }

      if (this.isInLastPage) {
        return Math.max(1, this.totalPages - this.maxVisibleButtons + 1)
      }

      return this.currentPage - 1
    },
    visiblePagesRangeSpan() {
      if (this.isInLastPage) return this.maxVisibleButtons
      return this.maxVisibleButtons - 1
    },
    pages() {
      const pagesRange = []
      const visiblePagesMaxIndex = Math.min(
        this.startPage + this.visiblePagesRangeSpan,
        this.totalPages
      )

      for (let i = this.startPage; i <= visiblePagesMaxIndex; i++) {
        pagesRange.push({
          key: i,
          isDisabled: i === this.currentPage,
        })
      }

      return pagesRange
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("page-changed", 1)
    },
    onClickPreviousPage() {
      this.$emit("page-changed", this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit("page-changed", page)
    },
    onClickNextPage() {
      this.$emit("page-changed", this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit("page-changed", this.totalPages)
    },
    onPerPageChange(event) {
      const perPage = parseInt(event.target.value)

      if (isNaN(perPage)) return
      this.$emit("per-page-changed", perPage)
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>

<style>
.pagination-container {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.pagination {
  margin-left: auto;
  list-style-type: none;
}
.pagination__item {
  display: inline-block;
  border: 1px solid #4b5563;
  background: none;

  border-radius: 6px;
  min-width: 30px;
  height: 2rem;
  text-align: center;
  margin-right: 8px;
}
.pagination__btn {
  display: inline-block;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: none;
  padding: 0;
  color: rgb(191, 191, 191);
  border: none;
  cursor: pointer;
}
.pagination__btn:disabled:not(.active) {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination__btn--active {
  background-color: #111827;
  color: white;
}
.pagination__btn:hover:not(:disabled) {
  background-color: #111827;
}
.pagination__per-page {
  max-width: 40px;
  max-height: 30px;
  border-radius: 3px;
  border: none;
  height: 1.5rem;
}
.pagination__per-page-text {
  margin: 0 0.5rem;
  color: white;
  display: flex;
  align-items: center;
}

@media (max-width: 480px) {
  .pagination-container {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .pagination {
    margin-left: initial;
  }
}
</style>
